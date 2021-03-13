# Publication Settings

After installing the theme you will most likely want to configure the following basic settings in your publication:

## Title & Description

In the **General Settings** of the Ghost Admin you can change the name of your publication and enter a description, as you can see in the following screenshot:

![General settings](https://res.cloudinary.com/edev/image/upload/v1615643598/weiss-pro/CleanShot_2021-03-13_at_14.52.52_2x.png)

The theme uses this information in a variety of places, for example in the first section of the home page, so if you want to display other content in that section, these are the settings you will need to change.

## Logo & Publication Cover

**Icon**

The icon or _favicon_ is a small image that can be seen in the browser tab, next to the title. You can change the icon in the **Publication icon** field located in the  **Publication Identity** section.

**Logo**

Ghost by default includes a white logo, I recommend you to remove it and upload your own logo. You can do this in the **Publication logo** field located in the  **Publication Identity** section.

In case you delete the default logo and don't upload any logo of your own, the theme will show the publication title instead.

::: tip
If you don't upload a logo the theme will use the title of your publication as logo, which will be displayed correctly in both light mode and dark mode.
:::

::: warning
The Publication cover is ignored in this theme to make it more elegant and clean.
:::

## Social Accounts

Ghost allows you to add social accounts links for Facebook and Twitter. By default it includes links from their own social accounts.

To change these links just delete them and enter yours in the **Social Accounts** section at the bottom of the **General Settings** page:

![Social accounts](https://res.cloudinary.com/edev/image/upload/v1607259926/firma/CleanShot_2020-12-06_at_14.04.53_2x.png)

If you don't want to show Facebook and Twitter links just delete the default links and save the changes.

## Posts Per Page

By default Weiss Pro shows up to 10 entries on each page listing, if you wish to change that number please follow these steps:

1. Unzip the theme folder.

2. Open the file `package.json` with a text editor.

3. Locate the following line of code and change the number to the one you prefer:

```
"posts_per_page": 10,
```

4. Save the changes.

5. Zip the theme folder and upload it again in the Ghost Admin.
