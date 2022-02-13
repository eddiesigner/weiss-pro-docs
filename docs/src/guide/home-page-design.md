# Home Page Design

Weiss Pro offers two different designs that you can use to adapt the top section of the home page according to your needs: **Featured Articles Section** (default) and **Hero Section**.

## Featured Articles Section

![](https://res.cloudinary.com/edev/image/upload/v1594671222/weiss-pro/CleanShot_2020-07-13_at_22.12.26.png)

The section at the top of the home page shows up to 5 featured articles. In order for it to appear you must first mark one or more articles as featured.

To find out how to mark articles as featured you can refer to the bottom of the next article: [https://ghost.org/faq/publishing-options/](https://ghost.org/faq/publishing-options/)

If you do not mark any articles as featured the Hero Section will be shown as a fallback.

### Disable Slider Autoplay

By default the featured articles carousel changes automatically every 5 seconds. You can of course disable this feature and let users change slides manually.

If you're using Ghost 4.20.0 or later and Weiss Pro 2.5.0 or later you can simply disable it in the theme design settings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1640609272/weiss-pro/CleanShot_2021-12-27_at_13.47.04.png)

::: warning
If you had previously disabled that option and now you prefer to disable it in the theme design settings please make sure to delete the code you injected otherwise an error will appear in the console because that variable had already been declared previously.
:::

If you're using a previous version please do the following instead:

In the Ghost Admin head to the **Code injection** page and paste the following code into the box corresponding to the **Site Header**:

```html
<script>
  const disableFeaturedSliderAutoplay = true;
</script>
```

Finally press the **Save** button and refresh your website to see the changes.

## Hero Section

![](https://res.cloudinary.com/edev/image/upload/v1644749440/weiss-pro/CleanShot_2022-02-13_at_11.49.46.png)

As mentioned above, this section will be shown in case you do not mark any article as featured, however, if you prefer this section to be shown all the time you can disable the Featured Articles Section in the theme design settings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1644749587/weiss-pro/CleanShot_2022-02-13_at_11.52.38.png)

Note that the theme will not use the publication cover by default, in order for it to be taken into account you must activate the "**Use publication cover**" option in the theme design settings. Learn more about this option in the [Branding Settings](/guide/publication-settings.html#branding) page.

### Custom CTA Button

It is also possible to use a custom CTA button in the Hero section, this way you can customize the text and link of the button without having to modify the theme code. These options can be found in the theme design settings as shown below:

![](https://res.cloudinary.com/edev/image/upload/v1640610097/weiss-pro/CleanShot_2021-12-27_at_14.00.54.png)

::: warning
These options are only available if you're using Ghost 4.20.0 or later and Weiss Pro 2.5.0 or later.
:::
