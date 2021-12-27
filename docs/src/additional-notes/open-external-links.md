# Open External Links in a New Tab by Default

If you want all the external links to open in another tab you have to paste the following code into the **Code injection** page of your Ghost Admin (**Site Footer** section):

```html
<script>
  const anchors = document.querySelectorAll('a');
    
  for (x = 0, l = anchors.length; x < l; x++) {
    const regex = new RegExp('/' + window.location.host + '/');
        
    if (!regex.test(anchors[x].href)) {
      anchors[x].setAttribute('target', '_blank');
      anchors[x].setAttribute('rel', 'noopener');
    }
  }
</script>
```
