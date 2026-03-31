import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-form.html',
  styleUrls: ['./input-form.css'],
})
export class InputFormComponent {
  url: string = '';
  error: string = '';

  constructor(
    private router: Router,
    public langService: LanguageService,
  ) {}

  translate(key: string): string {
    return this.langService.translate(key);
  }

  analyze() {
    this.error = '';

    if (!this.url.trim()) {
      this.error = this.translate('form.error.empty');
      return;
    }

    // Проста валідація URL
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
    if (!urlPattern.test(this.url)) {
      this.error = this.translate('form.error.invalid');
      return;
    }

    this.router.navigate(['/result'], {
      queryParams: { url: this.url },
    });
  }
}
