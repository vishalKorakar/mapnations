/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

// const populate = 
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log(ctx.query);
    const existingPopulate = (ctx.query as any)?.populate
    ctx.query.populate = {
      ...existingPopulate,
    maps: {
      populate: {
        image: true,
      },
    },
    chapterImage: true,
  };
    strapi.log.info('In chapter-populate middleware.');

    await next();
  };
};