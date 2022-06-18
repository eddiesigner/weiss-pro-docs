# Change Log

## Version 3.0.0
> 20/06/2022

* **Ghost 5 support** 🎉
* Membership Tiers support: [ghost.org/help/tiers/](https://ghost.org/help/tiers/)
* Update Docker Ghost image (development only)
* Bug fixes and improvements

```
Added files:

src/js/membership.js
src/sass/components/members/_plan-selector.scss

Modified files:

README.md
custom-page-no-metas-and-share.hbs
custom-post-no-author-section.hbs
index.hbs
members/membership.hbs
members/signup.hbs
package.json
page.hbs
partials/header.hbs
partials/home-hero.hbs
partials/membership.hbs
post.hbs
src/docker-compose.yml
src/js/app.js
src/js/vendor/content-api.min.js
src/sass/components/members/_subscription.scss
src/sass/layouts/_subscriptions.scss
src/sass/membership.scss
src/webpack.mix.js
```


## Version 2.5.2
> 25/04/2022

* Fixed the flickering that used to occur on page load when setting either light or dark mode.

```
Modified files:

default.hbs
package.json
src/js/app.js
src/js/helpers.js
src/sass/common/_themes.scss
```

## Version 2.5.1
> 14/02/2022

* Publication cover support 🎉
* New option to override the footnote text

```
Modified files:

README.md
index.hbs
package.json
partials/footer.hbs
partials/home-hero.hbs
partials/home-slider.hbs
src/sass/components/forms/_button.scss
src/sass/components/general/_blog-heading.scss
```

## Version 2.5.0
> 28/12/2021

* Add full support for new content cards: [https://ghost.org/changelog/cardmas/](https://ghost.org/changelog/cardmas/)
* Custom settings support: [https://ghost.org/changelog/custom-design-settings/](https://ghost.org/changelog/custom-design-settings/)
* Update Ghost image (only for development)
* Bug fixes and improvements

```
Added files:

partials/home-hero.hbs
partials/home-slider.hbs

Modified files:

default.hbs
index.hbs
LICENSE
package.json
partials/header.hbs
README.md
src/docker-compose.yml
src/js/post.js
src/sass/components/article/_content.scss
src/sass/components/header/_logo.scss
src/sass/post.scss
```

## Version 2.0.2
> 10/10/2021

* Add support for captions in feature images [https://ghost.org/changelog/feature-image-captions/](https://ghost.org/changelog/feature-image-captions/)
* Add support for more subscriptions statuses
* Remove Newsletter form and Members buttons if the corresponding setting is disabled in the Ghost Admin
* Update Ghost image (only for development)
* Bug fixes and improvements

```
Modified files:

custom-page-no-metas-and-share.hbs
custom-post-no-author-section.hbs
index.hbs
locales/en.json
locales/es.json
members/account.hbs
package.json
page.hbs
post.hbs
partials/header.hbs
partials/hero-background.hbs
src/docker-compose.yml
src/sass/common/_variables.scss
src/sass/components/article/_access-tag.scss
src/sass/components/article/_hero.scss
```

## Version 2.0.1
> 01/05/2021

* Public Previews support [https://ghost.org/help/public-previews/](https://ghost.org/help/public-previews/)
* Update Ghost image (only for development)

```
Modified files:

custom-page-no-metas-and-share.hbs
custom-page-no-newsletter.hbs
custom-page-only-content.hbs
custom-post-no-author-section.hbs
custom-post-no-newsletter.hbs
package.json
page.hbs
post.hbs
src/docker-compose.yml
```

## Version 2.0.0
> 25/03/2021

* **Ghost 4 support** 🎉
* Update dependencies
* Replace legacy code
* Bugfixes and improvements

```
Modified files:

README.md                        
author.hbs                       
custom-page-no-metas-and-share.hbs 
custom-post-no-author-section.hbs 
custom-post-no-newsletter.hbs 
default.hbs 
index.hbs  
locales/en.json 
locales/es.json 
members/account.hbs 
package.json             
page.hbs  
partials/featured-slide.hbs
partials/header.hbs  
partials/membership.hbs  
partials/notifications.hbs 
partials/post-card.hbs     
partials/recent-post.hbs   
partials/related-post.hbs  
partials/search.hbs              
post.hbs   
src/docker-compose.yml  
src/js/account.js                
src/js/app.js 
src/js/home.js  
src/js/post.js  
src/js/vendor/content-api.min.js 
src/package-lock.json  
src/package.json  
src/webpack.mix.js      
tag.hbs          

Removed files:

partials/notifications.hbs
```

## Version 1.8.0
> 15/03/2021

* Add more templates for posts and pages: [weiss-pro-docs.eduardogomez.io/additional-notes/post-templates.html](/additional-notes/post-templates.html)
* Remove documentation files from the theme folder
* Ignore submit event in search form
* Fix the position of the icon in the secondary menu button
* Improve and simplify development process
* Update README and LICENSE files

## Version 1.7.4
> 16/01/2021

* Display related articles only if post has tags
* Improve some hover styles in post content
* Update documentation
* Improve debug logs for theme development
* Update Ghost image version for theme development

## Version 1.7.3
> 14/12/2020

* Make images zoomable in articles when they are added as raw html
* Improve styling for code blocks
*Fix some typos

## Version 1.7.2
> 09/11/2020

* Displays feature image in tag pages when available
* Displays subscription message in pages when users don't have access to the content
* Displays blog description only if available
* Improvements and bugfixes

## Version 1.7.1
> 24/10/2020

* Speeds up the loading of images in the search by loading a smaller version of each image when possible
* Fixes a bug that didn't allow to see the "More" menu in Safari for iOS

## Version 1.7.0
> 12/10/2020

* Improves speed by reducing the font files size. Now the theme only loads the latin charset instead of loading all the supported charsets. More info about this here: https://github.com/eddiesigner/weiss-pro/wiki/How-to-use-a-different-character-encoding
* Updates Ghost version
* Adds the preload block to the default template
* Supports Complimentary plans
* Fixes translations issues, especially in the account page
* Fixes an issue related to the Medium-zoom library
* Loads the notifications template only if the Members feature is enabled
* Updates documentation

## Version 1.6.0
> 03/08/2020

* Improve focus style of icon buttons
* Add documentation on how to update the theme
* Fix membership page after signup through the free tier
* Gives support to other charsets like cyrillic, greek and vietnamese

## Version 1.5.0
> 27/07/2020

* Speed and performance is drastically improved
* Taglist page added
* Custom template for posts without author section
* Free tier available in membership page
‍* Better accessibility
* Search improved
* Documentation updated
* Bugfixes and improvements

## Version 1.1.3
> 1/06/2020

* Documentation was improved
* Fix a small issue with the style of the auth forms

## Version 1.1.2
> 22/05/2020

* Display the correct CTAs in the post pages based on member status when the users don't have access.

## Version 1.1.1
> 26/04/2020

* More social icons included (Behance, Snapchat, Discord, Deviantart, Wechat, Tumblr, Tiktok, SoundCloud, Telegram, Spotify, RSS, Vimeo, Steam, VK, IMDB)
* An empty status message is displayed correctly when the author of an article has no more articles published.
* Fix blurry images after zoom in on mobile devices
* Internal improvements
