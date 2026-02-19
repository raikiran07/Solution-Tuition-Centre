# Language Switcher Guide - English ⇄ Assamese

## Overview

The SOLUTION Tuition Centre website now includes a bilingual language switcher that allows users to toggle between English and Assamese (অসমীয়া). This feature is designed to make the website accessible to the local Assamese-speaking audience in Guwahati.

## Features

✅ **Instant Language Toggle**: Click the language button to switch between English and Assamese
✅ **Persistent Selection**: Language preference is saved in browser localStorage
✅ **Smooth Transitions**: Content changes smoothly without page reload
✅ **Comprehensive Coverage**: All major content sections are translated
✅ **Mobile Responsive**: Language switcher works seamlessly on all devices

## How It Works

### For Users

1. **Language Button Location**: Top-right corner of the navigation menu
2. **Current Display**: Shows "অসমীয়া" when in English mode, "English" when in Assamese mode
3. **One-Click Toggle**: Simply click the button to switch languages
4. **Automatic Save**: Your language preference is remembered for future visits

### Technical Implementation

#### HTML Structure

Each translatable element has two data attributes:
```html
<h1 data-en="Excellence in Education Since 1995" 
    data-as="1995 চনৰ পৰা শিক্ষাত উৎকৰ্ষতা">
    Excellence in Education Since 1995
</h1>
```

- `data-en`: English text
- `data-as`: Assamese text (অসমীয়া)

#### JavaScript Functionality

The language switcher uses:
1. **localStorage**: Saves user's language preference
2. **DOM Manipulation**: Updates all elements with data attributes
3. **Event Listeners**: Handles button clicks
4. **Auto-initialization**: Loads saved language on page load

## Adding Translations to Other Pages

To add bilingual support to other pages (about.html, programs.html, contact.html):

### Step 1: Add Language Switcher to Header

Copy the language switcher button from index.html:
```html
<li class="language-switcher">
    <button id="languageToggle" class="lang-btn" aria-label="Switch Language">
        <i class="fas fa-language"></i> <span id="currentLang">অসমীয়া</span>
    </button>
</li>
```

### Step 2: Add Data Attributes to Content

For each text element you want to translate, add both attributes:
```html
<!-- Before -->
<h2>About Us</h2>

<!-- After -->
<h2 data-en="About Us" data-as="আমাৰ বিষয়ে">About Us</h2>
```

### Step 3: Include Script

Make sure script.js is included at the bottom of the page:
```html
<script src="script.js"></script>
```

## Translation Reference

### Common Translations

| English | Assamese (অসমীয়া) |
|---------|-------------------|
| Home | মূল পৃষ্ঠা |
| About Us | আমাৰ বিষয়ে |
| Programs | পাঠ্যক্ৰম |
| Contact Us | যোগাযোগ |
| Call Us Now | এতিয়াই ফোন কৰক |
| Book Free Demo Class | বিনামূলীয়া ডেমো ক্লাছ বুক কৰক |
| Enroll Now | এতিয়াই নামভৰ্তি কৰক |
| Excellence in Education | শিক্ষাত উৎকৰ্ষতা |
| Trusted by 100+ Families | 100+ পৰিয়ালৰ বিশ্বাস |
| Experienced Faculty | অভিজ্ঞ শিক্ষক |
| Proven Results | প্ৰমাণিত ফলাফল |

### Class Levels

| English | Assamese |
|---------|----------|
| Primary (1-5) | প্ৰাথমিক (1-5) |
| Middle (6-8) | মধ্য (6-8) |
| Secondary (9-10) | মাধ্যমিক (9-10) |
| Senior Secondary (11-12) | উচ্চতৰ মাধ্যমিক (11-12) |

### Subjects

| English | Assamese |
|---------|----------|
| Mathematics | গণিত |
| Science | বিজ্ঞান |
| English | ইংৰাজী |
| Social Studies | সমাজ বিজ্ঞান |
| Physics | পদাৰ্থ বিজ্ঞান |
| Chemistry | ৰসায়ন বিজ্ঞান |
| Biology | জীৱ বিজ্ঞান |
| History | ইতিহাস |
| Geography | ভূগোল |

### Form Labels

| English | Assamese |
|---------|----------|
| Parent's Name | অভিভাৱকৰ নাম |
| Phone Number | ফোন নম্বৰ |
| Email Address | ইমেইল ঠিকনা |
| Student's Class | ছাত্ৰ-ছাত্ৰীৰ শ্ৰেণী |
| Select Class | শ্ৰেণী বাছনি কৰক |
| Subject of Interest | আগ্ৰহৰ বিষয় |
| Message | বাৰ্তা |
| Request Callback | কলবেক অনুৰোধ কৰক |

## Customization

### Changing Default Language

To set Assamese as the default language, modify script.js:
```javascript
// Change this line:
let currentLanguage = localStorage.getItem('language') || 'en';

// To:
let currentLanguage = localStorage.getItem('language') || 'as';
```

### Adding More Languages

To add additional languages (e.g., Hindi):

1. Add new data attribute: `data-hi="हमारे बारे में"`
2. Update the switchLanguage function to handle the new language
3. Add language selection dropdown instead of toggle button

### Styling the Language Button

Customize the language button appearance in styles.css:
```css
.lang-btn {
    background-color: transparent;
    border: 2px solid var(--primary-blue);
    color: var(--primary-blue);
    /* Add your custom styles */
}
```

## Browser Compatibility

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **No Page Reload**: Language switching is instant
- **Minimal JavaScript**: Lightweight implementation (~50 lines)
- **LocalStorage**: Fast preference retrieval
- **No External Dependencies**: Pure vanilla JavaScript

## SEO Considerations

For better SEO with bilingual content:

1. **Add hreflang tags** in the `<head>`:
```html
<link rel="alternate" hreflang="en" href="https://yoursite.com/index.html" />
<link rel="alternate" hreflang="as" href="https://yoursite.com/index.html?lang=as" />
```

2. **Update meta tags** dynamically based on language

3. **Consider separate URLs** for each language if needed for SEO

## Troubleshooting

### Language Not Switching

1. Check browser console for JavaScript errors
2. Verify script.js is loaded correctly
3. Ensure data-en and data-as attributes are present

### Language Not Persisting

1. Check if localStorage is enabled in browser
2. Clear browser cache and try again
3. Check for JavaScript errors in console

### Missing Translations

1. Verify all elements have both data-en and data-as attributes
2. Check for typos in attribute names
3. Ensure content is wrapped in elements with data attributes

## Future Enhancements

Potential improvements for the language switcher:

1. **Voice Selection**: Add text-to-speech for both languages
2. **Auto-Detection**: Detect browser language and set automatically
3. **More Languages**: Add Hindi, Bengali, or other regional languages
4. **Translation API**: Integrate with Google Translate API for dynamic content
5. **RTL Support**: Add right-to-left text support if needed

## Support

For questions or issues with the language switcher:
- Check this documentation first
- Review the code in script.js
- Test in different browsers
- Contact the development team

## Credits

Assamese translations provided for SOLUTION Tuition Centre website.
All translations are contextually appropriate for educational content.

---

**Note**: The Assamese translations provided are standard and appropriate for the Guwahati region. If you need dialect-specific variations or additional translations, please consult with a native Assamese speaker.
