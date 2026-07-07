# مطبعة إتقان برنت — موقع الويب (Etqan Print)

موقع تجريبي كامل وجاهز للتخصيص لشركة طباعة مغربية فاخرة، مبني بـ HTML5 / CSS
/ Vanilla JS بدون أي مكتبات خارجية (باستثناء الخطوط من Google Fonts).

## هيكل الملفات

```
etqan-print/
├── index.html                      ← الصفحة الرئيسية (كاملة مع كل الأقسام + Schema)
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/main.css                 ← كل التصميم (Design tokens + مكونات)
│   ├── js/main.js                    ← تفاعلات: قائمة، فلترة، reveal، نموذج
│   └── img/                          ← ضع صور WebP هنا (أسماء مطابقة لما في index.html)
├── pages/
│   ├── services/
│   │   ├── index.html               ← (يُبنى) صفحة كتالوج كل الخدمات مع فلترة
│   │   └── business-cards.html      ← قالب صفحة خدمة كامل (نسخ ولصق لل29 المتبقية)
│   ├── blog/
│   │   └── index.html               ← (يُبنى) أرشيف المدونة
│   ├── about.html                   ← (يُبنى)
│   ├── privacy-policy.html          ← (يُبنى)
│   └── shipping-policy.html         ← (يُبنى)
└── docs/
    ├── services-catalog.md          ← بيانات SEO كاملة لكل 30 خدمة (نسخها لصفحات HTML)
    └── blog-strategy.md             ← تقويم نشر 90 يومًا + قواعد SEO لكل مقال
```

## كيف تُكمل الموقع

1. **الصور:** استبدل كل مسارات `assets/img/*.webp` بصور WebP حقيقية مضغوطة
   (استخدم Squoosh أو `cwebp` لتحويل وضغط الصور، هدف < 150kb للصورة).
2. **صفحات الخدمات المتبقية (29):** افتح `pages/services/business-cards.html`،
   واستبدل المحتوى بالبيانات المقابلة من `docs/services-catalog.md` لكل خدمة.
   القالب جاهز بالكامل (Schema، Breadcrumb، FAQ، Hero) — التغيير فقط في النصوص والصور.
3. **صفحة فهرس الخدمات:** أنشئ `pages/services/index.html` بنفس نمط قسم
   `.categories` و`.svc-grid` من الصفحة الرئيسية، مع فلترة كاملة للـ30 خدمة.
4. **المدونة:** أنشئ صفحة لكل مقال من قائمة `docs/blog-strategy.md`، باستخدام
   نفس رأس/تذييل الموقع + Schema Article.
5. **النموذج (Quote Form):** الفورم في `index.html` يستخدم
   `action="/api/quote-request"` — اربطه بخدمة حقيقية (مثل Formspree،
   أو backend خاص، أو Google Sheets عبر Apps Script) لاستقبال الطلبات فعليًا.
6. **الأرقام والعناوين:** جميع أرقام الهاتف والعنوان والخريطة هي بيانات نموذجية
   — استبدلها ببيانات النشاط الحقيقي قبل النشر (رقم الهاتف، ICE، إحداثيات الخريطة).
7. **Google Search Console:** بعد النشر، أرسل `sitemap.xml` مباشرة، وتحقق من
   ظهور FAQ/Product/LocalBusiness Rich Results عبر Google Rich Results Test.

## ملاحظات أداء (Core Web Vitals)
- الخطوط تُحمَّل بـ `preconnect` + `font-display: swap` لتقليل CLS.
- كل الصور تحمل `loading="lazy"` (إلا صورة الهيرو التي تُحمَّل فورًا `eager`).
- CSS في ملف واحد بدون أي framework — لا JS غير ضروري، فقط تفاعلات أساسية.
- لتحقيق Lighthouse 100: حوّل جميع الصور إلى WebP بأحجام مناسبة لكل breakpoint
  (استخدم `srcset` عند إضافة الصور الحقيقية)، وفعّل ضغط Gzip/Brotli على السيرفر.

## الهوية البصرية (Design Tokens)
- **الألوان:** Ink Navy `#0F1B2E`، Brass Gold `#C9A45C`، Wine `#7A2E3A`، Paper Cream `#F7F3EC`
- **الخطوط:** عرض = Aref Ruqaa (خط عربي كلاسيكي)، النص = IBM Plex Sans Arabic
- **العنصر التصميمي المميز:** علامة "التسجيل" (Registration Mark ⊕) المستخدمة
  في الطباعة الحقيقية لمطابقة الألوان — تُستخدم كفاصل بصري في كل الموقع، بدل
  الأرقام أو الأيقونات الجنيرية.
