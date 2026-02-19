export const getProgramsData = (t: (key: string) => string) => [
  {
    id: 'primary',
    title: t('programs.primary.title'),
    subtitle: t('programs.primary.subtitle'),
    description: t('programs.primary.description'),
    features: [
      t('programs.primary.features.0'),
      t('programs.primary.features.1'),
      t('programs.primary.features.2'),
      t('programs.primary.features.3')
    ],
    subjects: t('programs.primary.subjects').split(','),
  },
  {
    id: 'middle',
    title: t('programs.middle.title'),
    subtitle: t('programs.middle.subtitle'),
    description: t('programs.middle.description'),
    features: [
      t('programs.middle.features.0'),
      t('programs.middle.features.1'),
      t('programs.middle.features.2'),
      t('programs.middle.features.3')
    ],
    subjects: t('programs.middle.subjects').split(','),
  },
  {
    id: 'secondary',
    title: t('programs.secondary.title'),
    subtitle: t('programs.secondary.subtitle'),
    description: t('programs.secondary.description'),
    features: [
      t('programs.secondary.features.0'),
      t('programs.secondary.features.1'),
      t('programs.secondary.features.2'),
      t('programs.secondary.features.3')
    ],
    subjects: t('programs.secondary.subjects').split(','),
  },
  {
    id: 'senior',
    title: t('programs.senior.title'),
    subtitle: t('programs.senior.subtitle'),
    description: t('programs.senior.description'),
    features: [
      t('programs.senior.features.0'),
      t('programs.senior.features.1'),
      t('programs.senior.features.2'),
      t('programs.senior.features.3')
    ],
    subjects: t('programs.senior.subjects').split(','),
  }
];
