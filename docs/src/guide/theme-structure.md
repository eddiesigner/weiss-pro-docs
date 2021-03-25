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
├── src
│   ├── docker-compose.yml
│   ├── js
│   │   ├── account.js
│   │   ├── app.js
│   │   ├── helpers.js
│   │   ├── home.js
│   │   ├── post.js
│   │   └── vendor
│   │       └── content-api.min.js
│   ├── order-locales.js
│   ├── package-lock.json
│   ├── package.json
│   ├── sass
│   │   ├── 404.scss
│   │   ├── account.scss
│   │   ├── app.scss
│   │   ├── auth.scss
│   │   ├── author.scss
│   │   ├── common
│   │   │   ├── _global.scss
│   │   │   ├── _helpers.scss
│   │   │   ├── _icons.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _reset.scss
│   │   │   ├── _themes.scss
│   │   │   └── _variables.scss
│   │   ├── components
│   │   │   ├── article
│   │   │   │   ├── _access-tag.scss
│   │   │   │   ├── _author.scss
│   │   │   │   ├── _content.scss
│   │   │   │   ├── _divider.scss
│   │   │   │   ├── _excerpt.scss
│   │   │   │   ├── _full-content.scss
│   │   │   │   ├── _header.scss
│   │   │   │   ├── _hero.scss
│   │   │   │   ├── _metas.scss
│   │   │   │   ├── _more-from-author.scss
│   │   │   │   ├── _primary-tag.scss
│   │   │   │   ├── _scroll-top.scss
│   │   │   │   ├── _share.scss
│   │   │   │   ├── _tag.scss
│   │   │   │   └── _title.scss
│   │   │   ├── articles
│   │   │   │   ├── _featured-slide.scss
│   │   │   │   ├── _featured-slider.scss
│   │   │   │   ├── _post-card.scss
│   │   │   │   ├── _recent-article.scss
│   │   │   │   ├── _related-article.scss
│   │   │   │   └── _result.scss
│   │   │   ├── auth
│   │   │   │   ├── _form.scss
│   │   │   │   ├── _heading.scss
│   │   │   │   ├── _illustration.scss
│   │   │   │   └── _secondary-text.scss
│   │   │   ├── authors
│   │   │   │   └── _featured-author.scss
│   │   │   ├── footer
│   │   │   │   ├── _copyright.scss
│   │   │   │   ├── _footer.scss
│   │   │   │   └── _icon.scss
│   │   │   ├── forms
│   │   │   │   ├── _button.scss
│   │   │   │   ├── _error-message.scss
│   │   │   │   ├── _fieldset.scss
│   │   │   │   └── _input.scss
│   │   │   ├── general
│   │   │   │   ├── _404.scss
│   │   │   │   ├── _alert.scss
│   │   │   │   ├── _back.scss
│   │   │   │   ├── _blog-heading.scss
│   │   │   │   ├── _heading.scss
│   │   │   │   ├── _hero.scss
│   │   │   │   ├── _loading-ring.scss
│   │   │   │   ├── _navigation.scss
│   │   │   │   ├── _newsletter.scss
│   │   │   │   ├── _no-posts.scss
│   │   │   │   └── _pagination.scss
│   │   │   ├── header
│   │   │   │   ├── _desktop-topbar-icon.scss
│   │   │   │   ├── _desktop-topbar.scss
│   │   │   │   ├── _header.scss
│   │   │   │   ├── _logo.scss
│   │   │   │   ├── _mobile-menu-icon.scss
│   │   │   │   ├── _mobile-menu.scss
│   │   │   │   ├── _mobile-topbar.scss
│   │   │   │   ├── _more-button.scss
│   │   │   │   ├── _open-menu.scss
│   │   │   │   ├── _progress.scss
│   │   │   │   ├── _secondary-menu.scss
│   │   │   │   ├── _site-name.scss
│   │   │   │   ├── _submenu.scss
│   │   │   │   └── _toggle-darkmode.scss
│   │   │   ├── members
│   │   │   │   ├── _account-info-block.scss
│   │   │   │   ├── _account-link.scss
│   │   │   │   ├── _account-module.scss
│   │   │   │   ├── _account-subscription-plan.scss
│   │   │   │   ├── _account-subscription-summary.scss
│   │   │   │   ├── _account-subscription.scss
│   │   │   │   └── _subscription.scss
│   │   │   ├── search
│   │   │   │   ├── _close.scss
│   │   │   │   ├── _empty-block.scss
│   │   │   │   ├── _form.scss
│   │   │   │   ├── _label.scss
│   │   │   │   ├── _not-found-text.scss
│   │   │   │   └── _tags-list.scss
│   │   │   └── tags
│   │   │       └── _tag-card.scss
│   │   ├── fonts
│   │   │   ├── icomoon
│   │   │   │   ├── icomoon.eot
│   │   │   │   ├── icomoon.svg
│   │   │   │   ├── icomoon.ttf
│   │   │   │   └── icomoon.woff
│   │   │   ├── playfair-display
│   │   │   │   ├── cyrillic
│   │   │   │   │   ├── playfair-display-700.eot
│   │   │   │   │   ├── playfair-display-700.svg
│   │   │   │   │   ├── playfair-display-700.ttf
│   │   │   │   │   ├── playfair-display-700.woff
│   │   │   │   │   └── playfair-display-700.woff2
│   │   │   │   ├── latin
│   │   │   │   │   ├── playfair-display-700.eot
│   │   │   │   │   ├── playfair-display-700.svg
│   │   │   │   │   ├── playfair-display-700.ttf
│   │   │   │   │   ├── playfair-display-700.woff
│   │   │   │   │   └── playfair-display-700.woff2
│   │   │   │   ├── latin-ext
│   │   │   │   │   ├── playfair-display-700.eot
│   │   │   │   │   ├── playfair-display-700.svg
│   │   │   │   │   ├── playfair-display-700.ttf
│   │   │   │   │   ├── playfair-display-700.woff
│   │   │   │   │   └── playfair-display-700.woff2
│   │   │   │   └── vietnamese
│   │   │   │       ├── playfair-display-700.eot
│   │   │   │       ├── playfair-display-700.svg
│   │   │   │       ├── playfair-display-700.ttf
│   │   │   │       ├── playfair-display-700.woff
│   │   │   │       └── playfair-display-700.woff2
│   │   │   └── roboto
│   │   │       ├── cyrillic
│   │   │       │   ├── roboto-500.eot
│   │   │       │   ├── roboto-500.svg
│   │   │       │   ├── roboto-500.ttf
│   │   │       │   ├── roboto-500.woff
│   │   │       │   ├── roboto-500.woff2
│   │   │       │   ├── roboto-700.eot
│   │   │       │   ├── roboto-700.svg
│   │   │       │   ├── roboto-700.ttf
│   │   │       │   ├── roboto-700.woff
│   │   │       │   ├── roboto-700.woff2
│   │   │       │   ├── roboto-regular.eot
│   │   │       │   ├── roboto-regular.svg
│   │   │       │   ├── roboto-regular.ttf
│   │   │       │   ├── roboto-regular.woff
│   │   │       │   └── roboto-regular.woff2
│   │   │       ├── latin
│   │   │       │   ├── roboto-500.eot
│   │   │       │   ├── roboto-500.svg
│   │   │       │   ├── roboto-500.ttf
│   │   │       │   ├── roboto-500.woff
│   │   │       │   ├── roboto-500.woff2
│   │   │       │   ├── roboto-700.eot
│   │   │       │   ├── roboto-700.svg
│   │   │       │   ├── roboto-700.ttf
│   │   │       │   ├── roboto-700.woff
│   │   │       │   ├── roboto-700.woff2
│   │   │       │   ├── roboto-regular.eot
│   │   │       │   ├── roboto-regular.svg
│   │   │       │   ├── roboto-regular.ttf
│   │   │       │   ├── roboto-regular.woff
│   │   │       │   └── roboto-regular.woff2
│   │   │       ├── latin-ext
│   │   │       │   ├── roboto-500.eot
│   │   │       │   ├── roboto-500.svg
│   │   │       │   ├── roboto-500.ttf
│   │   │       │   ├── roboto-500.woff
│   │   │       │   ├── roboto-500.woff2
│   │   │       │   ├── roboto-700.eot
│   │   │       │   ├── roboto-700.svg
│   │   │       │   ├── roboto-700.ttf
│   │   │       │   ├── roboto-700.woff
│   │   │       │   ├── roboto-700.woff2
│   │   │       │   ├── roboto-regular.eot
│   │   │       │   ├── roboto-regular.svg
│   │   │       │   ├── roboto-regular.ttf
│   │   │       │   ├── roboto-regular.woff
│   │   │       │   └── roboto-regular.woff2
│   │   │       └── vietnamese
│   │   │           ├── roboto-500.eot
│   │   │           ├── roboto-500.svg
│   │   │           ├── roboto-500.ttf
│   │   │           ├── roboto-500.woff
│   │   │           ├── roboto-500.woff2
│   │   │           ├── roboto-700.eot
│   │   │           ├── roboto-700.svg
│   │   │           ├── roboto-700.ttf
│   │   │           ├── roboto-700.woff
│   │   │           ├── roboto-700.woff2
│   │   │           ├── roboto-regular.eot
│   │   │           ├── roboto-regular.svg
│   │   │           ├── roboto-regular.ttf
│   │   │           ├── roboto-regular.woff
│   │   │           └── roboto-regular.woff2
│   │   ├── home.scss
│   │   ├── layouts
│   │   │   ├── _404.scss
│   │   │   ├── _article-wrapper.scss
│   │   │   ├── _auth.scss
│   │   │   ├── _author.scss
│   │   │   ├── _comments.scss
│   │   │   ├── _content.scss
│   │   │   ├── _newsletter.scss
│   │   │   ├── _posts-container.scss
│   │   │   ├── _related-articles.scss
│   │   │   ├── _search.scss
│   │   │   ├── _subscriptions.scss
│   │   │   ├── _tags-container.scss
│   │   │   ├── _tags.scss
│   │   │   └── _wrapper.scss
│   │   ├── libs
│   │   │   ├── aos
│   │   │   │   ├── _animations.scss
│   │   │   │   ├── _aos.scss
│   │   │   │   ├── _core.scss
│   │   │   │   └── _easing.scss
│   │   │   └── swiper
│   │   │       └── _swiper.scss
│   │   ├── listing.scss
│   │   ├── membership.scss
│   │   ├── newsletter.scss
│   │   ├── post.scss
│   │   └── tags.scss
│   └── webpack.mix.js
└── tag.hbs
```

::: tip
The `src` folder is only for development and contains all the source code of this theme, it's useful only if you want to make several changes on this theme or if you want to build your own theme on top of it.
:::

::: warning
Avoid making changes to the files in the Assets folder as these will be overwritten with each new version. For small changes you can inject code in the Ghost Admin instead.
:::
