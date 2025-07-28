# 📧 EmailJS Setup Guide

## Setting Up EmailJS for Direct Email Delivery

Your contact form is now configured to use EmailJS, which will send emails directly to `kartheekbalaga8@gmail.com` without opening the user's email client.

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (`kartheekbalaga8@gmail.com`)
5. Note down your **Service ID** (it will look like `service_rlemr3r`)

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template:

**Template Name:** `portfolio_contact`

**Subject:** `Portfolio Contact from {{from_name}}`

**Content:**
```
Name: {{from_name}}
Email: {{email_id}}

Message:
{{message}}
```

4. Save the template and note down your **Template ID**

### Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### Step 5: Update Your Code

Replace the placeholders in your files:

**In `script.js` (line ~8):**
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS Public Key
```

**In `script.js` (line ~155):**
```javascript
emailjs.sendForm('service_rlemr3r', 'YOUR_TEMPLATE_ID', this)
```

### Example with Real Values:
If your details are:
- Public Key: `user_a1b2c3d4e5f6g7h8i9j0`
- Service ID: `service_rlemr3r`
- Template ID: `template_abc123`

Your code would be:
```javascript
emailjs.init("user_a1b2c3d4e5f6g7h8i9j0");
emailjs.sendForm('service_rlemr3r', 'template_abc123', this)
```

### Step 6: Test the Form

1. Open your portfolio in a browser
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email at `kartheekbalaga8@gmail.com`

### Features of EmailJS:

- ✅ **Direct email delivery** to `kartheekbalaga8@gmail.com`
- ✅ **No user email client required**
- ✅ **Professional email templates**
- ✅ **Spam protection**
- ✅ **Email tracking** (premium feature)
- ✅ **Mobile responsive**
- ✅ **Free tier available** (200 emails/month)

### Troubleshooting:

1. **Check browser console** for any errors
2. **Verify EmailJS keys** are correct
3. **Test with EmailJS dashboard** first
4. **Check spam folder** for test emails

### Free Tier Limits:
- 200 emails per month
- Perfect for portfolio websites

That's it! Once you set up EmailJS, all contact form submissions will be sent directly to `kartheekbalaga8@gmail.com`! 🎉 