import { UserService } from './../../services/user';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // ← ДОДАТИ ChangeDetectorRef
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
  users: any[] = [];
  activities: any[] = [];

  constructor(
    private historyService: HistoryService,
    private router: Router,
    public langService: LanguageService,
    private UserService: UserService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.history = this.historyService.getHistory();

    this.UserService.getUsers().subscribe((users) => {
      console.log('Users received:', users.length);
      this.users = users;
      this.generateActivities();
      this.cdr.detectChanges();
    });
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

  generateActivities() {
    this.activities = this.users.map((user) => ({
      name: user.name,
      company: user.company.name,
      url: this.randomUrl(),
      score: this.randomScore(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4f46e5&color=fff&bold=true&length=2&size=40`,
    }));
    console.log('activities generated:', this.activities.length);
  }

  randomUrl(): string {
    const sites = ['google.com', 'shopify.com', 'startup.io', 'blog.dev'];
    return sites[Math.floor(Math.random() * sites.length)];
  }

  randomScore(): number {
    return Math.floor(Math.random() * 40) + 60;
  }
}
