// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create a service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your public key from Account settings
// 6. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'service_portfolio', // Replace with your EmailJS service ID
  templateId: 'template_contact', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Email template variables that will be sent:
// - from_name: sender's name
// - from_email: sender's email
// - to_email: your email (esfouna.am@gmail.com)
// - message: the message content
// - subject: email subject line