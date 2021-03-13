# Enable Featured Articles Section

![](https://res.cloudinary.com/edev/image/upload/v1594671222/weiss-pro/CleanShot_2020-07-13_at_22.12.26.png)

The section at the top of the home page shows up to 5 featured articles. In order for it to appear you must first mark one or more articles as featured.

To find out how to mark articles as featured you can refer to the bottom of the next article: [https://ghost.org/faq/publishing-options/](https://ghost.org/faq/publishing-options/)

If you do not mark any articles as featured then a section will be displayed with your blog's title, description and a signup button (if you enable the members feature).

## Disable Autoplay

By default the featured articles carousel changes automatically every 5 seconds. If you want to disable this feature and let users change slides manually just do the following:

1. In the Ghost Admin head to the **Code injection** menu and paste the following code into the box corresponding to the **Site Header**:

```html
<script>
  const disableFeaturedSliderAutoplay = true;
</script>
```

1. Finally press the **Save** button and refresh your website to see the changes.
