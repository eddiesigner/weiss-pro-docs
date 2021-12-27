# Enable Search

The search uses a Content API Key in order to work, that means the first thing you have to do is to generate a new Key, to do so please follow these steps:

In the Ghost Admin head to the **Integrations** page and press the **Add custom integration** button. You can name it as you like but I recommend that you name it _Search_.

Copy the **Content API Key**.

## Add your Content API Key

If you're using Ghost 4.20.0 or later and Weiss Pro 2.5.0 or later you can simply paste the key in the theme design settings as shown bellow:

![Search API Key](https://res.cloudinary.com/edev/image/upload/v1640607748/weiss-pro/CleanShot_2021-12-27_at_13.21.42.png)

::: warning
If you had previously added your key and now you prefer to add your key in the theme design settings please make sure to delete the code you injected otherwise an error will appear in the console because that variable had already been declared previously.
:::

If you're using a previous version please do the following instead:

Head to the **Code injection** page and paste the following code into the **Site Header** block:

```html
<script>
  const ghostSearchApiKey = 'YOUR_CONTENT_API_KEY_GOES_HERE';
</script>
```

Remember that you have to replace `YOUR_CONTENT_API_KEY_GOES_HERE` with the Content API Key that you got in step 2 (please keep the single quotes).

Finally press the **Save** button and refresh your website to see the search button enabled.
