# 📧 Email Setup Guide

## Setting Up Contact Form Email Delivery

To make the contact form send emails to `kartheekbalaga8@gmail.com`, you need to set up Formspree (a free service).

### Step 1: Create Formspree Account

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (it will look like: `xrgjqkqj`)

### Step 2: Update the Form

Replace `YOUR_FORMSPREE_ENDPOINT` in these files:

**In `index.html` (line ~380):**
```html
<form action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" method="POST">
```

**In `script.js` (line ~95):**
```javascript
fetch('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', {
```

### Step 3: Test the Form

1. Open your portfolio in a browser
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email at `kartheekbalaga8@gmail.com`

### Alternative: Direct Email Link

If you prefer, you can also add a direct email link:

```html
<a href="mailto:kartheekbalaga8@gmail.com" class="btn btn-primary">
    <i class="fas fa-envelope"></i> Email Me Directly
</a>
```

### Features of the Contact Form:

- ✅ Sends emails to `kartheekbalaga8@gmail.com`
- ✅ Form validation
- ✅ Success/error notifications
- ✅ Spam protection (via Formspree)
- ✅ Mobile responsive
- ✅ Professional styling

### Example Formspree Endpoint:
If your Formspree endpoint is `xrgjqkqj`, the URLs would be:
- `https://formspree.io/f/xrgjqkqj`

That's it! Once you set up Formspree, all contact form submissions will be sent directly to your email address. 🎉 