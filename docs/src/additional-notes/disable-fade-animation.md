# Disable Fade Animation

If you're using Ghost 4.20.0 or later and Weiss Pro 2.5.0 or later you can disable the fade animation that runs everytime you load a page in the theme design settings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1640610732/weiss-pro/CleanShot_2021-12-27_at_14.11.28.png)

::: warning
If you had previously disabled that option and now you prefer to disable it in the theme design settings please make sure to delete the code you injected otherwise an error will appear in the console because that variable had already been declared previously.
:::

If you're using a previous version please do the following instead:

In the Ghost Admin head to the **Code injection** page and paste the following code into the box corresponding to the **Site Header**:

```html
<script>
  const disableFadeAnimation = true;
</script>
```

Finally press the **Save** button and refresh your website to see the changes.
