import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RealAnalysisService, AnalysisResult } from '../../services/real-analysis.service';
import { HistoryService } from '../../services/history.service';
import { LanguageService } from '../../services/language.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  analysis: AnalysisResult | null = null;
  loading = true;
  error: string | null = null;
  chartData: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private analysisService: RealAnalysisService,
    private historyService: HistoryService,
    private cdr: ChangeDetectorRef,
    public langService: LanguageService,
  ) {}

  translate(key: string): string {
    return this.langService.translate(key);
  }

  async ngOnInit() {
    const url = this.route.snapshot.queryParamMap.get('url');
    if (!url) {
      this.router.navigate(['/']);
      return;
    }

    try {
      this.loading = true;
      this.error = null;
      this.analysis = await this.analysisService.analyzeWebsite(url);
      this.chartData = [
        this.analysis.metrics.performance,
        this.analysis.metrics.seo,
        this.analysis.metrics.accessibility,
        this.analysis.metrics.ux,
      ];
      this.historyService.saveAnalysis(this.analysis);
    } catch (err: any) {
      this.error = err.message || this.translate('error.general');
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  getScoreColor(score: number): string {
    if (score >= 80) return '#22c55e';
    if (score >= 60) return '#eab308';
    return '#ef4444';
  }

  getScoreText(score: number): string {
    if (score >= 80) return this.translate('score.excellent');
    if (score >= 60) return this.translate('score.good');
    if (score >= 40) return this.translate('score.average');
    return this.translate('score.poor');
  }

  getIssueMessage(issue: any): string {
    if (issue.params) {
      return this.langService.translate(issue.messageKey, issue.params);
    }
    return this.langService.translate(issue.messageKey);
  }

  getRecommendationText(recKey: string): string {
    return this.langService.translate(recKey);
  }

  getMetricIcon(metricName: string): string {
    const icons: Record<string, string> = {
      performance: '⚡',
      seo: '🔍',
      accessibility: '♿',
      ux: '🎨',
    };
    return icons[metricName] || '📊';
  }

  getMetricDescription(metricName: string): string {
    return this.translate(`metrics.${metricName}`);
  }

  getMetricValue(metric: string): number {
    const metrics = this.analysis?.metrics;
    if (!metrics) return 0;
    return metrics[metric as keyof typeof metrics] ?? 0;
  }

  exportToPDF() {
    const element = document.getElementById('report-content');
    if (!element) return;

    const opt = {
      margin: 1,
      filename: `ux-report-${this.analysis?.url || 'website'}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in' as const, format: 'a4', orientation: 'portrait' as const },
    };

    html2pdf().set(opt).from(element).save();
  }

  shareOnLinkedIn() {
    const text = `${this.translate('share.text')} ${this.analysis?.url} та отримала оцінку ${this.analysis?.score}/100!`;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  goBack() {
    this.router.navigate(['/']);
  }

  reanalyze() {
    window.location.reload();
  }
}
