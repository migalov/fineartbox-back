module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'http:', 'https:'],
            'img-src': ["'self'", 'data:', 'blob:', 'https://static0.wow2print.com/', 'https://strapi.io'], // Add your S3 bucket URL here
            'media-src': ["'self'", 'data:', 'blob:', 'https://static0.wow2print.com/'], // Add your S3 bucket URL here
            upgradeInsecureRequests: null,
          },
        },
      },
    },
];
