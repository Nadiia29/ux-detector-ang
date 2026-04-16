import { Injectable, signal, computed, effect } from '@angular/core';

export type Language = 'uk' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLang = signal<Language>('en');

  readonly language = this.currentLang.asReadonly();
  readonly isUkrainian = computed(() => this.currentLang() === 'uk');
  readonly isEnglish = computed(() => this.currentLang() === 'en');

  constructor() {
    this.initLanguage();
  }

  private initLanguage() {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'uk' || savedLang === 'en')) {
      this.currentLang.set(savedLang);
      return;
    }

    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('uk')) {
      this.currentLang.set('uk');
    } else {
      this.currentLang.set('en');
    }
  }

  switchLanguage(lang: Language) {
    this.currentLang.set(lang);
    localStorage.setItem('language', lang);
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const translation = this.translations[key];
    if (!translation) return key;

    let text = translation[this.currentLang()];

    if (params) {
      Object.keys(params).forEach((paramKey) => {
        text = text.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(params[paramKey]));
      });
    }

    return text;
  }

  private translations: Record<string, { uk: string; en: string }> = {
    'app.title': {
      uk: 'FixMyUX',
      en: 'FixMyUX',
    },
    'app.subtitle': {
      uk: 'Аналізуйте UX. Покращуйте конверсію.',
      en: 'Analyze UX. Improve conversion.',
    },
    'history.title': {
      uk: '📊 Останні аналізи',
      en: '📊 Recent Analyses',
    },
    'history.clear': {
      uk: 'Очистити',
      en: 'Clear',
    },
    'history.empty': {
      uk: 'Ще немає аналізів. Перевірте перший сайт!',
      en: 'No analyses yet. Check your first website!',
    },

    'form.placeholder': {
      uk: 'Вставте URL сайту (наприклад: example.com)',
      en: 'Paste website URL (e.g., example.com)',
    },
    'form.button': {
      uk: 'Аналізувати',
      en: 'Analyze',
    },
    'form.error.empty': {
      uk: 'Будь ласка, введіть URL',
      en: 'Please enter a URL',
    },
    'form.error.invalid': {
      uk: 'Будь ласка, введіть коректний URL',
      en: 'Please enter a valid URL',
    },

    'analysis.loading': {
      uk: '🔍 Аналізуємо сайт...',
      en: '🔍 Analyzing website...',
    },
    'analysis.checking': {
      uk: 'Перевіряємо швидкість, SEO, доступність та UX',
      en: 'Checking speed, SEO, accessibility & UX',
    },
    'analysis.site': {
      uk: 'Аналіз сайту:',
      en: 'Website analysis:',
    },
    'analysis.date': {
      uk: 'Дата перевірки:',
      en: 'Date:',
    },

    'score.excellent': {
      uk: 'Відмінно!',
      en: 'Excellent!',
    },
    'score.good': {
      uk: 'Добре, але є нюанси',
      en: 'Good, but some issues found',
    },
    'score.average': {
      uk: 'Середньо, потрібні покращення',
      en: 'Average, needs improvement',
    },
    'score.poor': {
      uk: 'Погано, терміново виправляйте!',
      en: 'Poor, fix immediately!',
    },

    'metrics.performance': {
      uk: 'Швидкодія',
      en: 'Performance',
    },
    'metrics.seo': {
      uk: 'SEO',
      en: 'SEO',
    },
    'metrics.accessibility': {
      uk: 'Доступність',
      en: 'Accessibility',
    },
    'metrics.ux': {
      uk: 'UX',
      en: 'UX',
    },

    'issues.title': {
      uk: '🔍 Знайдені проблеми',
      en: '🔍 Issues Found',
    },
    'issues.no_https': {
      uk: '❌ Сайт не використовує HTTPS — небезпечно для користувачів',
      en: '❌ Website does not use HTTPS — unsafe for users',
    },
    'issues.https_active': {
      uk: "✅ HTTPS активний — з'єднання захищене",
      en: '✅ HTTPS is active — connection is secure',
    },
    'issues.no_www': {
      uk: '⚠️ Відсутній www — може впливати на довіру користувачів',
      en: '⚠️ Missing www — may affect user trust',
    },
    'issues.website_builder': {
      uk: '⚠️ Визначено конструктор сайтів — можлива нижча швидкість',
      en: '⚠️ Website builder detected — possible lower performance',
    },
    'issues.modern_hosting': {
      uk: '💡 Хостинг на сучасній платформі — добре для продуктивності',
      en: '💡 Modern hosting platform — good for performance',
    },
    'issues.long_url': {
      uk: '⚠️ Довгий URL — може негативно впливати на SEO',
      en: '⚠️ Long URL — may negatively affect SEO',
    },
    'issues.ecommerce_detected': {
      uk: '🛒 Виявлено e-commerce структуру — перевірте checkout UX',
      en: '🛒 E-commerce structure detected — check checkout UX',
    },
    'issues.basic_structure_ok': {
      uk: '💡 Базова структура URL відповідає стандартам',
      en: '💡 Basic URL structure meets standards',
    },

    'rec.performance': {
      uk: '⚡ Оптимізуйте зображення та мініфікуйте CSS/JS для швидшого завантаження',
      en: '⚡ Optimize images and minify CSS/JS for faster loading',
    },
    'rec.seo': {
      uk: '🔍 Додайте унікальний Title та meta description для кожної сторінки',
      en: '🔍 Add unique Title and meta description for each page',
    },
    'rec.accessibility': {
      uk: '♿ Перевірте контрастність тексту та додайте alt-тексти до зображень',
      en: '♿ Check text contrast and add alt texts to images',
    },
    'rec.ux': {
      uk: '🎨 Спростіть навігацію та додайте чіткі заклики до дії (CTA)',
      en: '🎨 Simplify navigation and add clear calls to action (CTA)',
    },
    'rec.ssl': {
      uk: '🔒 Встановіть SSL-сертифікат та налаштуйте редирект на HTTPS',
      en: '🔒 Install SSL certificate and set up HTTPS redirect',
    },
    'rec.perfect': {
      uk: '🎉 Сайт відповідає базовим стандартам якості!',
      en: '🎉 Website meets basic quality standards!',
    },
    'rec.ab_testing': {
      uk: '💡 Розгляньте A/B тестування для підвищення конверсій',
      en: '💡 Consider A/B testing to increase conversions',
    },
    'rec.analytics': {
      uk: '📊 Додайте Google Analytics для відстеження поведінки користувачів',
      en: '📊 Add Google Analytics to track user behavior',
    },

    'recommendations.title': {
      uk: '💡 Рекомендації для покращення',
      en: '💡 Recommendations',
    },

    'button.export': {
      uk: '📄 Експорт у PDF',
      en: '📄 Export to PDF',
    },
    'button.share': {
      uk: '💼 Поділитись в LinkedIn',
      en: '💼 Share on LinkedIn',
    },
    'button.reanalyze': {
      uk: '🔄 Перевірити знову',
      en: '🔄 Reanalyze',
    },
    'button.new': {
      uk: '🏠 Перевірити інший сайт',
      en: '🏠 Try another website',
    },
    'button.try': {
      uk: 'Спробувати знову',
      en: 'Try again',
    },

    'error.general': {
      uk: 'Не вдалося завантажити сайт. Перевірте URL.',
      en: 'Cannot load website. Check URL.',
    },

    'share.text': {
      uk: 'Я перевірила UX сайту',
      en: 'I checked the UX of',
    },

    'chart.title': {
      uk: 'Візуалізація метрик',
      en: 'Metrics Visualization',
    },
    'score.overall': {
      uk: 'Загальна оцінка',
      en: 'Overall Score',
    },
  };
}
