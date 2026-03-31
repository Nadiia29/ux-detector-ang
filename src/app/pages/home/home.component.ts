import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { InputFormComponent } from '../../components/input-form/input-form';
import { HistoryService } from '../../services/history.service';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DatePipe, InputFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  history: any[] = [];

  constructor(
    private historyService: HistoryService,
    private router: Router,
    public langService: LanguageService,
  ) {}

  ngOnInit() {
    this.history = this.historyService.getHistory();
  }

  translate(key: string): string {
    return this.langService.translate(key);
  }

  switchLanguage(lang: 'uk' | 'en') {
    this.langService.switchLanguage(lang);
  }

  reanalyze(url: string) {
    this.router.navigate(['/result'], { queryParams: { url } });
  }

  getScoreColor(score: number): string {
    if (score >= 80) return '#22c55e';
    if (score >= 60) return '#eab308';
    return '#ef4444';
  }

  clearHistory() {
    this.historyService.clearHistory();
    this.history = [];
  }
}
