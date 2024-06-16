export const navLinks = [
  {
    id: 0,
    name: 'Vår byrå',
    path: '/om-oss',
  },
  {
    id: 1,
    name: 'Expertis',
    path: '/expertis',
    sublinks: [
      {
        id: 1,
        name: 'Webbutveckling',
        path: '/expertis',
      },
      {
        id: 2,
        name: 'CMS',
        path: '/expertis/cms',
      },
      {
        id: 3,
        name: 'Sökordsoptimering (SEO)',
        path: '/expertis/seo',
      },
    ],
  },
  {
    id: 2,
    name: 'Kontakta oss',
    path: '/kontakta',
  },
]
