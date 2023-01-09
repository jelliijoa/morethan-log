const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'YOONJI',
    image: 'https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjoxLCJub3NlIjoxMCwibW91dGgiOjksImV5ZXMiOjQsImV5ZWJyb3dzIjo0LCJnbGFzc2VzIjowLCJoYWlyIjoyNywiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'developer',
    bio: 'Develop Everyday-!',
    email: 'vinblanx@gmail.com',
    linkedin: '',
    github: 'jelliijoa',
    instagram: 'myoonzii',
  },
  projects: [
    {
      name: 'Untilled',
      href: ''
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Yoon-log',
    description: 'welcome to yoon-log!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://morethan-6qadfihms-jelliijoa.vercel.app',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
