# Force Light or Dark Mode

The default mode used by Weiss Pro is the light mode, this can be changed by the user by clicking the dark mode toggle button located in the main menu.

In case you want to disable that behaviour and keep only one of the two modes (either light or dark) you can do the following:

In the Ghost Admin go to **Settings** and click on **Code injection**, then paste the following code into the **Site Header** section:

#### Force light mode:

```html
<style>
  [data-theme="light"],
  [data-theme="dark"] {
    --background-color: #FFFFFF;
    --primary-foreground-color: #2A2A2A;
    --secondary-foreground-color: #333333;
    --primary-subtle-color: #F5F6F9;
    --border-color: #CECECE;
    --empty-color: #F4F4F4;
    --input-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    --transparent-background: rgba(255, 255, 255, 0.95);
    --article-shadow-color: rgba(0, 0, 0, 0.2);
    --author-background-color: #FAFAFA;
    --author-posts-background-color: #F5F5F5;
    --placeholder-color: #6F6F6F;
    --tag-hover-color: #E6EAF5;
    --footer-background-color: #131313;
    --footer-foreground-color: #FFFFFF;
    --toggle-darkmode-button-color: #EFEFEF;
    --toggle-darkmode-button-display-moon: block;
    --toggle-darkmode-button-display-sun: none;
    --full-content-shadow: 0 -17px 42px 4px rgba(0, 0, 0, 0.15);
    --label-color: #616161;
    --header-menu-gradient-first-color: rgba(255, 255, 255, 0);
    --header-menu-gradient-second-color: rgba(255, 255, 255, 1);
  }
</style>
```

#### Force dark mode:

```html
<style>
  [data-theme="light"],
  [data-theme="dark"] {
    --background-color: #000000;
    --primary-foreground-color: #EFEFEF;
    --secondary-foreground-color: #DDDDDD;
    --primary-subtle-color: #111111;
    --border-color: #222222;
    --empty-color: #141414;
    --input-shadow: 0 5px 10px 0 rgba(20, 20, 20, 0.9);
    --transparent-background: rgba(0, 0, 0, 0.95);
    --article-shadow-color: rgba(128, 128, 128, 0.2);
    --author-background-color: #0A0A0C;
    --author-posts-background-color: #111114;
    --placeholder-color: #6F6F6F;
    --tag-hover-color: #161515;
    --footer-background-color: #131313;
    --footer-foreground-color: #FFFFFF;
    --toggle-darkmode-button-color: #2A2A2A;
    --toggle-darkmode-button-display-moon: none;
    --toggle-darkmode-button-display-sun: block;
    --full-content-shadow: 0 -17px 42px 4px rgba(5, 5, 5, 1);
    --label-color: #bdbdbd;
    --header-menu-gradient-first-color: rgba(0, 0, 0, 0);
    --header-menu-gradient-second-color: rgba(0, 0, 0, 0.65);
  }
</style>
```

You might also want to hide the button that allows users to switch between modes, if that's the case then please add this style rule:

```html
<style>
  .m-toggle-darkmode {
    display: none !important;
  }
</style>
```
