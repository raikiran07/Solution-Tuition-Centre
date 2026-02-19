export const getTestimonialsData = (t: (key: string) => string) => [
  {
    id: 1,
    quote: t('testimonials.items.0.quote'),
    author: t('testimonials.items.0.author'),
    role: t('testimonials.items.0.role'),
    initials: "MS",
    rating: 5,
  },
  {
    id: 2,
    quote: t('testimonials.items.1.quote'),
    author: t('testimonials.items.1.author'),
    role: t('testimonials.items.1.role'),
    initials: "RK",
    rating: 5,
  },
  {
    id: 3,
    quote: t('testimonials.items.2.quote'),
    author: t('testimonials.items.2.author'),
    role: t('testimonials.items.2.role'),
    initials: "MD",
    rating: 5,
  },
  {
    id: 4,
    quote: t('testimonials.items.3.quote'),
    author: t('testimonials.items.3.author'),
    role: t('testimonials.items.3.role'),
    initials: "MB",
    rating: 5,
  },
];
