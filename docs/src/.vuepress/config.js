const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Weiss Pro Ghost Theme',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Change Log',
        link: '/misc/changelog',
      },
      {
        text: 'Terms',
        link: '/misc/terms',
      },
      {
        text: 'Features',
        link: 'https://weiss-pro.eduardogomez.io/features',
      },
      {
        text: 'Style Guide',
        link: 'https://weiss-pro.eduardogomez.io/style-guide',
      },
      {
        text: 'Get Weiss Pro',
        link: 'https://gum.co/pzvDn'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/install-theme',
          '/guide/update-theme',
          '/guide/theme-structure',
          '/guide/publication-settings',
          '/guide/navigation',
          '/guide/enable-search',
          '/guide/home-page-design',
          '/guide/enable-authors-page',
          '/guide/enable-tags-page',
          '/guide/enable-newsletter',
          '/guide/add-comments',
          '/guide/enable-members',
          '/guide/theme-translation',
          '/guide/custom-fonts',
          '/guide/footnote-override',
          '/guide/theme-development',
        ]
      },
      {
        title: 'Additional Notes',
        collapsable: false,
        children: [
          '/additional-notes/force-mode',
          '/additional-notes/post-templates',
          '/additional-notes/social-icons',
          '/additional-notes/use-different-character-encoding',
          '/additional-notes/open-external-links',
          '/additional-notes/disable-fade-animation',
          '/additional-notes/resources',
        ]
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
