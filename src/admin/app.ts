import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      'vi',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
