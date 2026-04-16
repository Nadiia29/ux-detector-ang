# 🚀 FixMyUX - UX Friction Detector

<div align="center">

![Angular](https://img.shields.io/badge/Angular-17+-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)
![Chart.js](https://img.shields.io/badge/Chart.js-4.0+-green?logo=chartdotjs)
![License](https://img.shields.io/badge/License-MIT-green)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen)

**Аналізуйте UX будь-якого сайту за лічені секунди**

[🚀 Live Demo](https://nadiia29.github.io/ux-detector-ang/) | [📖 Documentation](#) | [🐛 Report Bug](https://github.com/Nadiia29/ux-detector-ang/issues) | [💡 Request Feature](https://github.com/Nadiia29/ux-detector-ang/issues)

</div>

---

## 📖 Про проект

**FixMyUX** — це сучасний веб-інструмент для аналізу користувацького досвіду (UX) веб-сайтів. Проект створений для демонстрації навичок розробки на Angular 17+ та розуміння ключових аспектів фронтенд-розробки.

### 🎯 Чому це важливо?

- **92%** користувачів покидають сайт через поганий UX
- **70%** бізнесу втрачають конверсії через технічні проблеми
- **1 секунда** затримки зменшує конверсію на 7%

FixMyUX допомагає виявити проблемні місця та отримати рекомендації для покращення.

---

## ✨ Особливості

### 🌍 Двомовний інтерфейс

- 🇺🇦 Українська мова
- 🇬🇧 English
- Автоматичне визначення мови браузера
- Збереження вибору користувача

### 📊 Детальний аналіз

| Метрика          | Опис                                  |
| ---------------- | ------------------------------------- |
| ⚡ Performance   | Швидкість завантаження та оптимізація |
| 🔍 SEO           | Пошукова оптимізація                  |
| ♿ Accessibility | Доступність для всіх користувачів     |
| 🎨 UX            | Користувацький досвід                 |

### 📈 Візуалізація даних

- **Радарна діаграма** для наочного порівняння метрик
- Інтерактивний графік з підказками
- Автоматичне оновлення при зміні мови

### 🔥 Live Activity

- Реальні користувачі з JSONPlaceholder API
- Аватарки для кожного користувача
- Динамічне відображення активності

### 🛠 Функціонал

- ✅ **Реальний аналіз** веб-сайтів
- ✅ **Історія перевірок** зі збереженням у LocalStorage
- ✅ **Експорт звітів** у PDF
- ✅ **Шерінг результатів** у LinkedIn
- ✅ **Кольорове кодування** результатів (зелений/жовтий/червоний)
- ✅ **Адаптивний дизайн** для всіх пристроїв
- ✅ **Анімації** при завантаженні та наведенні

---

## 🛠 Технології

### Frontend

| Технологія | Версія | Призначення        |
| ---------- | ------ | ------------------ |
| Angular    | 17+    | Основний фреймворк |
| TypeScript | 5.0+   | Типізація          |
| Signals    | -      | Реактивність       |
| RxJS       | 7+     | Асинхронність      |
| HTML5/CSS3 | -      | Структура та стилі |

### Додаткові бібліотеки

- `html2pdf.js` — генерація PDF звітів
- `Chart.js` — радарна діаграма метрик
- `LocalStorage API` — збереження історії
- `JSONPlaceholder API` — демо-дані для Live Activity

### Інструменти

- **Angular CLI** — збірка та розробка
- **Git** — контроль версій
- **GitHub Pages** — деплой

---

## 🚀 Початок роботи

### Вимоги

- Node.js (версія 18+)
- npm або yarn
- Angular CLI

### Встановлення

1. **Клонувати репозиторій**

```bash
git clone https://github.com/Nadiia29/ux-detector-ang.git
cd ux-detector-ang
```

2. **Встановити залежності**

bash
npm install

3. **Запустити локально**

bash
ng serve

3. **Відкрити браузер**

text
http://localhost:4200

📁 Структура проекту

fixmyux/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── input-form/ # Форма введення URL
│ │ │ └── result-card/ # Картка результату
│ │ ├── pages/
│ │ │ ├── home/ # Головна сторінка
│ │ │ └── result/ # Сторінка результатів
│ │ ├── services/
│ │ │ ├── real-analysis.service.ts # Логіка аналізу
│ │ │ ├── history.service.ts # Історія перевірок
│ │ │ ├── language.service.ts # Двомовність
│ │ │ └── user.service.ts # Користувачі (Live Activity)
│ │ ├── app.routes.ts # Маршрутизація
│ │ └── app.config.ts # Конфігурація
│ ├── assets/ # Статичні файли
│ └── styles.css # Глобальні стилі
├── .gitignore
├── angular.json
├── package.json
└── README.md

🎯 **Як це працює?**
Користувач вводить URL сайту для аналізу

Система аналізує ключові метрики:

Наявність HTTPS

Структура URL

Виявлення CMS/конструкторів

SEO-фактори

Елементи UX

Формується звіт з:

Загальною оцінкою (0-100)

Детальними метриками

Списком проблем

Рекомендаціями

Результати зберігаються в історію

Можливість експорту у PDF та поширення в LinkedIn

📸 **Скріншоти**
🖼️

Головна сторінка
EN [<img width="1676" height="681" alt="main_en" src="https://github.com/user-attachments/assets/98bedca0-75f0-4b16-b194-11881d70316b" />
]
UA [<img width="1636" height="737" alt="main_ua" src="https://github.com/user-attachments/assets/8025271e-9cc1-4138-98da-cde62e96e9cd" />
]

Сторінка результатів
[<img width="1321" height="869" alt="result" src="https://github.com/user-attachments/assets/a0aeb1b0-291d-4845-9d9b-3ff127b02084" />
]

Історія перевірок
[<img width="1759" height="869" alt="history" src="https://github.com/user-attachments/assets/1b880a91-6788-4a22-bd1e-d8419e985e34" />
]

PDF експорт
[<img width="1899" height="869" alt="pdf" src="https://github.com/user-attachments/assets/644a6370-7d94-4a3b-bc5f-9ff873fa316d" />
]

Live Activity []

📈 **Майбутні покращення**
Реальний HTTP аналіз через CORS-проксі

Порівняння з конкурентами

Додавання темної теми

PWA підтримка (офлайн режим)

Telegram бот для звітів

Unit-тести (Jasmine/Karma)

GitHub Actions CI/CD

📞 **Контакти**
Автор: Nadiia Poshtova

💼 LinkedIn: https://www.linkedin.com/in/nadiia-poshtova-73b59224b/

🐙 GitHub: https://github.com/Nadiia29

📧 Email: nadiia.poshtova@gmail.com

📄 **Ліцензія**
Проект поширюється за ліцензією MIT. Деталі у файлі LICENSE.

🙏**Подяки**
Angular Team — за чудовий фреймворк

html2pdf.js — за просту генерацію PDF

Chart.js — за красиві графіки

JSONPlaceholder — за демо-дані

Всім, хто тестував та давав зворотний зв'язок

<div align="center"> **Зроблено з 💙 для української IT-спільноти**
⭐️ Зірка на GitHub — найкраща подяка!

</div> ```
