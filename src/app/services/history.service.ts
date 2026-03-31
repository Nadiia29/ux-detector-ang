import { Injectable } from '@angular/core';
import { AnalysisResult } from './real-analysis.service';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private readonly STORAGE_KEY = 'ux_analysis_history';

  saveAnalysis(analysis: AnalysisResult): void {
    const history = this.getHistory();
    history.unshift(analysis);
    const limited = history.slice(0, 20);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(limited));
  }

  getHistory(): AnalysisResult[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) return [];

    try {
      const parsed = JSON.parse(data);
      return parsed.map((item: any) => ({
        ...item,
        timestamp: new Date(item.timestamp),
      }));
    } catch {
      return [];
    }
  }

  clearHistory(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
