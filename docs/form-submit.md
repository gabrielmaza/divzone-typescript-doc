---
sidebar_position: 7
---

# Formsubmit

Get email for each response from your **form**.

---

```js title="EXAMPLE FORM / CONTACT FORM"
// highlight-next-line
<form action="https://formsubmit.co/your@email.com" method="POST">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <button type="submit">Send</button>
</form>
```

## Point your form to our server url

Set your form's action-attribute to our server url and specify a unique token generated from your email or your email itself. E.g.

`https://formsubmit.io/send/<token or your email>`

## Confirm your email address

Go to your website and submit the form once or visit the url in your browser. A confirmation email will be sent to you with a link, which you will have to click to confirm your email.

## You are all set to go!

That's it! formsubmit takes care of all the processing. It will send you email when someone submits the form on your site.

For FormSubmit Advanced Features you can consult the official site **https://formsubmit.co**
