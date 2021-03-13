# Disable Fade Animation

To disable the fade animation that runs everytime you load a page you have to do the following:

1. In the Ghost Admin head to the **Code injection** menu and paste the following code into the box corresponding to the **Site Header**:

```html
<script>
  const disableFadeAnimation = true;
</script>
```

2. Finally press the **Save** button and refresh your website to see the changes.
