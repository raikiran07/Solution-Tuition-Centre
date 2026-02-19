# SOLUTION Tuition Centre Website

A professional, conversion-focused website for SOLUTION Tuition Centre in Guwahati, Assam.

## Features

- **Bilingual Support**: English ⇄ Assamese (অসমীয়া) language switcher for local audience
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Fast Loading**: Optimized images, lazy loading, and minified assets
- **Conversion Focused**: Strategic CTAs, contact forms, and WhatsApp integration
- **Accessible**: WCAG 2.1 Level AA compliant with proper contrast and keyboard navigation
- **Persistent Language**: User's language preference saved in browser

## Pages

1. **Home (index.html)**: Hero section, benefits, programs overview, testimonials, contact form
2. **About (about.html)**: Company story, values, faculty profiles
3. **Programs (programs.html)**: Detailed program information for all classes
4. **Contact (contact.html)**: Contact form, location map, FAQs

## Setup Instructions

### 1. Language Switcher

The website includes a bilingual English-Assamese language switcher. Users can toggle between languages by clicking the language button in the navigation menu. The preference is automatically saved.

**To add translations to other pages:**
- See `LANGUAGE_SWITCHER_GUIDE.md` for detailed instructions
- Copy the language switcher button from index.html header
- Add `data-en` and `data-as` attributes to translatable elements
- Ensure script.js is included

### 2. Update Contact Information

Replace all instances of `+91XXXXXXXXXX` with the actual phone number in:
- index.html
- about.html
- programs.html
- contact.html

### 3. Configure Contact Form

The contact forms use Formspree. To set up:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy your form endpoint
5. Replace `YOUR_FORM_ID` in the form action URLs:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 4. Update Google Maps

The Google Maps embed is already configured with SOLUTION Tuition Centre's location. If you need to update:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in index.html and contact.html

### 5. Add Social Media Links

Update social media links in the footer of all pages:
```html
<a href="YOUR_FACEBOOK_URL" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
<a href="YOUR_INSTAGRAM_URL" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
<a href="YOUR_YOUTUBE_URL" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
```

### 6. Update Faculty Information

In `about.html`, replace placeholder faculty information with actual:
- Faculty photos
- Names
- Specializations
- Bios

### 7. Optimize Images

For best performance:
1. Compress all images using tools like TinyPNG or ImageOptim
2. Convert to WebP format with JPG fallback
3. Use appropriate dimensions (hero: 1600px wide, faculty: 300px wide)

## Deployment

### Option 1: Netlify (Recommended)

1. Create account at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be live instantly
4. Configure custom domain in settings

### Option 2: GitHub Pages

1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `username.github.io/repo-name`

### Option 3: Traditional Hosting

1. Upload all files to your web hosting via FTP
2. Ensure index.html is in the root directory
3. Configure domain settings with your hosting provider

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- All images use lazy loading
- CSS and JS are minified (for production)
- Fonts are preloaded
- Async loading for non-critical resources

## Customization

### Colors

Update colors in `styles.css`:
```css
:root {
    --primary-blue: #1E3A8A;
    --secondary-orange: #F59E0B;
    --accent-green: #10B981;
}
```

### Typography

The site uses Inter font. To change:
1. Update Google Fonts link in HTML
2. Update font-family in CSS

## Support

For technical support or customization requests, contact the development team.

## License

© 2025 SOLUTION Tuition Centre. All Rights Reserved.
