# Publication Settings

After installing the theme you will most likely want to configure the following basic settings in your publication:

## Title & Description

In the **General Settings** of the Ghost Admin you can change the name of your publication and enter a description, as you can see in the following screenshot:

![General settings](https://res.cloudinary.com/edev/image/upload/v1615643598/weiss-pro/CleanShot_2021-03-13_at_14.52.52_2x.png)

The theme uses this information in a variety of places, for example in the first section of the home page, so if you want to display other content in that section, these are the settings you will need to change.

## Social Accounts

Ghost allows you to add social accounts links for Facebook and Twitter. By default it includes links from their own social accounts.

To change these links just delete them and enter yours in the **Social Accounts** section at the bottom of the **General Settings** page:

![Social accounts](https://res.cloudinary.com/edev/image/upload/v1607259926/firma/CleanShot_2020-12-06_at_14.04.53_2x.png)

If you don't want to show Facebook and Twitter links just delete the default links and save the changes.

## Branding

In the **Branding Settings** of the Ghost Admin you can change the Publication icon and the Publication logo as well.

**Accent Color**

The accent color is ignored in this theme to keep a consistent and elegant design.

**Publication Icon**

The icon or _favicon_ is a small image that can be seen in the browser tab, next to the title. You can change the icon in this section.

**Publication Logo**

Ghost includes a logo by default, I recommend you to remove it and upload your own logo. You can do this in the **Publication logo** field located in this section.

If your logo does not look good in dark mode, you can upload an additional logo to be displayed when dark mode is activated. You can upload your second logo in the theme design settings as shown below:

![Logo for dark mode](https://res.cloudinary.com/edev/image/upload/v1640607161/weiss-pro/CleanShot_2021-12-27_at_13.12.03.png)

::: tip
If you don't upload a logo the theme will use the title of your publication as logo, which will be displayed correctly in both light mode and dark mode.
:::

::: warning
The second logo option is only available if you're using Ghost 4.20.0 or later and Weiss Pro 2.5.0 or later.
:::

**Publication Cover**

You can also change the cover which is shown in the first section of the home page. To change it just delete the default image in the **Publication Cover** field and upload the image you prefer.

Here's a screenshot of these settings:

![](https://res.cloudinary.com/edev/image/upload/v1644747365/weiss-pro/CleanShot_2022-02-13_at_11.14.15.png)

Note that the theme will not use the publication cover by default, in order for it to be taken into account you must activate the "**Use publication cover**" option in the theme design settings. This is so as not to suddenly change the design of publications that have been using Weiss Pro for a long time and prefer to keep the design simpler and cleaner.

![](https://res.cloudinary.com/edev/image/upload/v1644747651/weiss-pro/CleanShot_2022-02-13_at_11.19.57.png)

::: tip
If you have marked articles as featured and want the cover of the publication to be visible instead of the featured articles slider, you must also enable the option "**Disable featured articles section**".
:::

::: warning
This option is only available if you're using Ghost 4.20.0 or later and Weiss Pro 2.5.1 or later.
:::

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
