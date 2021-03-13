# Add Comments

## Disqus

Weiss Pro integrates perfectly with [Disqus](https://disqus.com), all you have to do is the following:

1) After creating an account in Disqus, you will have to create a new site in the [admin](https://disqus.com/admin) of that platform.

2) You must copy the `shortname` of your new site, this can be found in the preferences of your new site.

![](https://res.cloudinary.com/edev/image/upload/v1577958242/weiss-pro/Screen_Shot_2020-01-02_at_10.43.31.png)

3) Unzip the theme folder.

4) You have to open with some code editor the file `post.hbs` that is included in the folder of the theme and look for the next piece of code:

```html
{{!--
<div class="l-comments">
  If you want to embed comments, this is a good place to do it!
</div>
--}}
```

5) Now you have to uncomment the code by removing the lines with `{{!--` and `--}}`, then replace the content with the Disqus Universal Code so it looks like this:

```html
<div class="l-comments">
  <div id="disqus_thread"></div>
  <script>
    var disqus_config = function () {
      this.page.url = "{{url absolute="true"}}";
      this.page.identifier = "ghost-{{comment_id}}"
    };
    (function () {
      var d = document, s = d.createElement('script');
      s.src = 'https://CHANGETHIS.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</div>
```

6) Inside that piece of code look for the next line:

```js
s.src = 'https://CHANGETHIS.disqus.com/embed.js';
```

Replace `CHANGETHIS` with your `shortname`. Then save the file, zip the theme folder and upload it to your Ghost instance.

## Cove

[Cove](https://cove.chat/) is an alternative comment platform that allows you to embed fully functional comment threads from your subscribed members, allowing you to build a community for your membership audience on Ghost. In other words, Cove lets subscribers of your content log in and comment on your content.

> To install Cove into Ghost, you need to enable Members in Ghost, including setting up the email system.

There is an [official guide](https://ghost.org/integrations/cove-comments/) on how to integrate Cove with Ghost, the only difference is step 4 (Add the code to your theme), the difference is that you must paste the code provided by Cove in the same place you would with Disqus (as described above).

That means, you have to open with some code editor the file `post.hbs` that is included in the folder of the theme (`Weiss-Pro-Theme/theme/weiss-pro/`) and replace the next piece of code:

```html
{{!--
<div class="l-comments">
  If you want to embed comments, this is a good place to do it!
</div>
--}}
```

with this:

```html
<div class="l-comments">
  {{#if @labs.members}}
    <h2><span id="cove-count"></span> Comments</h2>
    <div id="cove"></div>

    {{#if @member}}
      <p>Signed in as {{@member.email}} · <a href="javascript:" data-members-signout>Sign out</a></p>
    {{else}}
      <p>Become a {{@site.title}} member below to join the conversation. As a member, you will also receive new posts by email (you can unsubscribe at any time).</p>
      <form data-members-form="signin" id="cove-login">
        <input class="cove-input" data-members-email type="email" required="true" placeholder="your@email.com" />
        <button type="submit" class="cove-button">Sign in to comment</button>
        <span class="signin-success" style="display:none">Great! Please check your inbox for a log in link.</span>
        <span class="signin-error" style="display:none">Something didn't work. Please try again.</span>
      </form>
    {{/if}}

    <script>
    const Cove = {
      publication: "YOUR_SITE_ID",
      contentId: "{{id}}",
      memberId: "{{@member.uuid}}",
      memberEmail: "{{@member.email}}"
    }
    </script>
  {{/if}}
</div>
```

Then save the file, zip the theme folder and upload it to your Ghost instance.

For more detailed info please refer to their [official documentation](https://cove.chat/help/install-cove-in-ghost/)

::: warning
To install Cove you need to enable first the Members feature in the Ghost Admin, including setting up the email system.
:::
