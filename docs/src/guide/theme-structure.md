# Theme Structure

The theme is organized with the following file structure:

```
.
├── LICENSE
├── README.md
├── assets
│   ├── css
│   │   ├── 404.css
│   │   ├── account.css
│   │   ├── app.css
│   │   ├── auth.css
│   │   ├── author.css
│   │   ├── home.css
│   │   ├── listing.css
│   │   ├── membership.css
│   │   ├── newsletter.css
│   │   ├── post.css
│   │   └── tags.css
│   ├── fonts
│   │   ├── icomoon
│   │   │   ├── icomoon.eot
│   │   │   ├── icomoon.svg
│   │   │   ├── icomoon.ttf
│   │   │   └── icomoon.woff
│   │   ├── playfair-display
│   │   │   ├── cyrillic
│   │   │   │   ├── playfair-display-700.eot
│   │   │   │   ├── playfair-display-700.svg
│   │   │   │   ├── playfair-display-700.ttf
│   │   │   │   ├── playfair-display-700.woff
│   │   │   │   └── playfair-display-700.woff2
│   │   │   ├── latin
│   │   │   │   ├── playfair-display-700.eot
│   │   │   │   ├── playfair-display-700.svg
│   │   │   │   ├── playfair-display-700.ttf
│   │   │   │   ├── playfair-display-700.woff
│   │   │   │   └── playfair-display-700.woff2
│   │   │   ├── latin-ext
│   │   │   │   ├── playfair-display-700.eot
│   │   │   │   ├── playfair-display-700.svg
│   │   │   │   ├── playfair-display-700.ttf
│   │   │   │   ├── playfair-display-700.woff
│   │   │   │   └── playfair-display-700.woff2
│   │   │   └── vietnamese
│   │   │       ├── playfair-display-700.eot
│   │   │       ├── playfair-display-700.svg
│   │   │       ├── playfair-display-700.ttf
│   │   │       ├── playfair-display-700.woff
│   │   │       └── playfair-display-700.woff2
│   │   └── roboto
│   │       ├── cyrillic
│   │       │   ├── roboto-500.eot
│   │       │   ├── roboto-500.svg
│   │       │   ├── roboto-500.ttf
│   │       │   ├── roboto-500.woff
│   │       │   ├── roboto-500.woff2
│   │       │   ├── roboto-700.eot
│   │       │   ├── roboto-700.svg
│   │       │   ├── roboto-700.ttf
│   │       │   ├── roboto-700.woff
│   │       │   ├── roboto-700.woff2
│   │       │   ├── roboto-regular.eot
│   │       │   ├── roboto-regular.svg
│   │       │   ├── roboto-regular.ttf
│   │       │   ├── roboto-regular.woff
│   │       │   └── roboto-regular.woff2
│   │       ├── latin
│   │       │   ├── roboto-500.eot
│   │       │   ├── roboto-500.svg
│   │       │   ├── roboto-500.ttf
│   │       │   ├── roboto-500.woff
│   │       │   ├── roboto-500.woff2
│   │       │   ├── roboto-700.eot
│   │       │   ├── roboto-700.svg
│   │       │   ├── roboto-700.ttf
│   │       │   ├── roboto-700.woff
│   │       │   ├── roboto-700.woff2
│   │       │   ├── roboto-regular.eot
│   │       │   ├── roboto-regular.svg
│   │       │   ├── roboto-regular.ttf
│   │       │   ├── roboto-regular.woff
│   │       │   └── roboto-regular.woff2
│   │       ├── latin-ext
│   │       │   ├── roboto-500.eot
│   │       │   ├── roboto-500.svg
│   │       │   ├── roboto-500.ttf
│   │       │   ├── roboto-500.woff
│   │       │   ├── roboto-500.woff2
│   │       │   ├── roboto-700.eot
│   │       │   ├── roboto-700.svg
│   │       │   ├── roboto-700.ttf
│   │       │   ├── roboto-700.woff
│   │       │   ├── roboto-700.woff2
│   │       │   ├── roboto-regular.eot
│   │       │   ├── roboto-regular.svg
│   │       │   ├── roboto-regular.ttf
│   │       │   ├── roboto-regular.woff
│   │       │   └── roboto-regular.woff2
│   │       └── vietnamese
│   │           ├── roboto-500.eot
│   │           ├── roboto-500.svg
│   │           ├── roboto-500.ttf
│   │           ├── roboto-500.woff
│   │           ├── roboto-500.woff2
│   │           ├── roboto-700.eot
│   │           ├── roboto-700.svg
│   │           ├── roboto-700.ttf
│   │           ├── roboto-700.woff
│   │           ├── roboto-700.woff2
│   │           ├── roboto-regular.eot
│   │           ├── roboto-regular.svg
│   │           ├── roboto-regular.ttf
│   │           ├── roboto-regular.woff
│   │           └── roboto-regular.woff2
│   ├── images
│   │   ├── empty
│   │   │   ├── author-avatar-illustration.svg
│   │   │   ├── author-empty-illustration.svg
│   │   │   ├── featured-illustration.svg
│   │   │   ├── more-from-author-empty-illustration.svg
│   │   │   ├── no-search.svg
│   │   │   ├── no-tag.svg
│   │   │   ├── post-illustration.svg
│   │   │   └── related-article-empty-illustration.svg
│   │   ├── members
│   │   │   ├── premium-illustration.svg
│   │   │   └── signin-illustration.svg
│   │   └── subscribe
│   │       └── success-illustration.svg
│   ├── js
│   │   ├── account.js
│   │   ├── app.js
│   │   ├── helpers.js
│   │   ├── home.js
│   │   ├── manifest.js
│   │   ├── post.js
│   │   ├── vendor
│   │   │   └── content-api.min.js
│   │   └── vendor.js
│   ├── mix-manifest.json
│   ├── screenshot-desktop.jpg
│   └── screenshot-mobile.jpg
├── author.hbs
├── custom-page-no-metas-and-share.hbs
├── custom-page-no-newsletter.hbs
├── custom-page-only-content.hbs
├── custom-post-no-author-section.hbs
├── custom-post-no-newsletter.hbs
├── default.hbs
├── error-404.hbs
├── index.hbs
├── locales
│   ├── en.json
│   └── es.json
├── members
│   ├── account.hbs
│   ├── membership.hbs
│   ├── signin.hbs
│   └── signup.hbs
├── package.json
├── page-authors.hbs
├── page-newsletter.hbs
├── page-tags.hbs
├── page.hbs
├── partials
│   ├── author-card.hbs
│   ├── comments.hbs
│   ├── featured-slide.hbs
│   ├── footer.hbs
│   ├── full-content.hbs
│   ├── header.hbs
│   ├── hero-background.hbs
│   ├── home-hero.hbs
│   ├── home-slider.hbs
│   ├── membership.hbs
│   ├── navigation.hbs
│   ├── newsletter-form.hbs
│   ├── no-posts.hbs
│   ├── pagination.hbs
│   ├── post-card.hbs
│   ├── recent-post.hbs
│   ├── related-post.hbs
│   ├── search.hbs
│   └── share.hbs
├── post.hbs
├── routes.yaml
└── tag.hbs
```

::: warning
Avoid making changes to the files in the Assets folder as these will be overwritten with each new version. For small changes you can inject code in the Ghost Admin instead.
:::
