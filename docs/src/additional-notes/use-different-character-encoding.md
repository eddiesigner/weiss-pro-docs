# Use a Different Character Encoding

The fonts used in this theme support Latin characters by default, this means that they support languages such as English, Spanish, Italian, French, German, Portuguese, among others. In most cases this is more than enough and you can skip this guide ;)

However, if the content of your blog is written in languages that are derived from Cyrillic (Russian, Ukrainian, Serbian, etc.) or in Vietnamese, then your blog will have to load a different version of the fonts. Fortunately this theme includes different font files for the following character encodings:

* [Latin (default)](https://en.wikipedia.org/wiki/ISO/IEC_8859-1)
* [Latin extended](https://en.wikipedia.org/wiki/Latin_Extended-A)
* [Cyrillic](https://en.wikipedia.org/wiki/Cyrillic_script)
* [Vietnamese](https://en.wikipedia.org/wiki/VSCII)

If you want to change the character encoding so that the text in your content is displayed correctly, follow these steps:

1) Unzip the theme folder (`weiss-pro.zip`).

2) Open with some text editor the file `default.hbs` that is included in the theme folder.

3) Search and replace all the matches of `latin/` with `latin-ext/` or `cyrillic/` or `vietnamese/`.

For example, if you want to use Cyrillic because your content is written in Russian, then the relevant part should look like this:

```css
    /* playfair-display-700 */
    @font-face {
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url("{{asset 'fonts/playfair-display/cyrillic/playfair-display-700.eot'}}");
      src: url("{{asset 'fonts/playfair-display/cyrillic/playfair-display-700.eot?#iefix'}}") format('embedded-opentype'),
          url("{{asset 'fonts/playfair-display/cyrillic/playfair-display-700.woff2'}}") format('woff2'),
          url("{{asset 'fonts/playfair-display/cyrillic/playfair-display-700.woff'}}") format('woff'),
          url("{{asset 'fonts/playfair-display/cyrillic/playfair-display-700.ttf'}}") format('truetype'),
          url("{{asset 'fonts/playfair-display/cyrillic/playfair-display-700.svg#PlayfairDisplay'}}") format('svg');
    }

    /* roboto-regular */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url("{{asset 'fonts/roboto/cyrillic/roboto-regular.eot'}}");
      src: local('Roboto'), local('Roboto-Regular'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-regular.eot?#iefix'}}") format('embedded-opentype'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-regular.woff2'}}") format('woff2'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-regular.woff'}}") format('woff'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-regular.ttf'}}") format('truetype'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-regular.svg#Roboto'}}") format('svg');
    }

    /* roboto-500 */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url("{{asset 'fonts/roboto/cyrillic/roboto-500.eot'}}");
      src: local('Roboto Medium'), local('Roboto-Medium'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-500.eot?#iefix'}}") format('embedded-opentype'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-500.woff2'}}") format('woff2'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-500.woff'}}") format('woff'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-500.ttf'}}") format('truetype'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-500.svg#Roboto'}}") format('svg');
    }

    /* roboto-700 */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url("{{asset 'fonts/roboto/cyrillic/roboto-700.eot'}}");
      src: local('Roboto Bold'), local('Roboto-Bold'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-700.eot?#iefix'}}") format('embedded-opentype'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-700.woff2'}}") format('woff2'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-700.woff'}}") format('woff'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-700.ttf'}}") format('truetype'),
          url("{{asset 'fonts/roboto/cyrillic/roboto-700.svg#Roboto'}}") format('svg');
    }
```

4) Save the file.

5) Zip the theme folder again and upload it in the Ghost Admin.
