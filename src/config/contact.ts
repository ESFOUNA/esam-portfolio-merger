// Contact Form Configuration
// Using Formspree - a free form backend service

export const contactConfig = {
  // Formspree endpoint - you need to:
  // 1. Go to https://formspree.io/
  // 2. Create a free account
  // 3. Create a new form
  // 4. Replace 'xdkogkvo' with your actual form ID
  formspreeEndpoint: 'https://formspree.io/f/xdkogkvo',
  
  // Your email where messages will be sent
  recipientEmail: 'esfouna.am@gmail.com',
  
  // Form settings
  settings: {
    timeout: 10000, // 10 seconds timeout
    retries: 2, // Number of retry attempts
  }
};

// Alternative services you can use:
// - Netlify Forms (if hosting on Netlify)
// - Vercel Forms (if hosting on Vercel)
// - EmailJS (requires more setup but more customizable)
// - GetForm.io (another free alternative)