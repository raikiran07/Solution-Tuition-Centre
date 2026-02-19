# Language Toggle Feature

This website now supports bilingual content in English and Assamese (অসমীয়া).

## How It Works

### For Users
- Click the language toggle button in the header (shows "অসমীয়া" when in English mode, "English" when in Assamese mode)
- The entire website content will switch between English and Assamese
- The language preference is maintained during your session

### For Developers

#### Architecture
1. **LanguageContext** (`src/contexts/LanguageContext.tsx`): Manages the current language state
2. **Translation Files**: 
   - `src/translations/en.json` - English translations
   - `src/translations/as.json` - Assamese translations
3. **useTranslation Hook** (`src/hooks/useTranslation.ts`): Convenient hook to access translations
4. **LanguageToggle Component** (`src/components/shared/LanguageToggle.tsx`): UI button for switching languages

#### Adding New Translations

1. Add the translation key to both `en.json` and `as.json`:
```json
// en.json
{
  "newSection": {
    "title": "My Title",
    "description": "My Description"
  }
}

// as.json
{
  "newSection": {
    "title": "মোৰ শিৰোনাম",
    "description": "মোৰ বৰ্ণনা"
  }
}
```

2. Use in components:
```tsx
import { useTranslation } from "@/hooks/useTranslation";

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t("newSection.title")}</h1>
      <p>{t("newSection.description")}</p>
    </div>
  );
};
```

#### Components Updated
- Header (navigation links, call-to-action)
- Footer (all sections)
- HeroSection
- WhyChooseUs
- HowItWorks
- ProgramsSection
- TestimonialsSection
- ContactCTA

#### Components Remaining
The following pages still need translation integration:
- About page (`src/pages/About.tsx`)
- Programs page (`src/pages/Programs.tsx`)
- Contact page (`src/pages/Contact.tsx`)
- NotFound page (`src/pages/NotFound.tsx`)

To update these, follow the same pattern:
1. Import `useTranslation` hook
2. Replace hardcoded text with `t("translation.key")`
3. Add corresponding translations to both JSON files

## Translation Keys Structure

```
header.*          - Navigation and header elements
hero.*            - Hero section content
whyChooseUs.*     - Why Choose Us section
programs.*        - Programs section and data
howItWorks.*      - How It Works section
testimonials.*    - Testimonials section
contactCTA.*      - Contact call-to-action
about.*           - About page content
contact.*         - Contact page content
footer.*          - Footer content
```

## Notes
- All translations are loaded dynamically based on the selected language
- The language toggle button is visible on both desktop and mobile views
- Translation files use nested JSON structure for better organization
