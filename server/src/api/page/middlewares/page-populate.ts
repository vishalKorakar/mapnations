/**
 * `page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = [
  "Sections"
]
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log(ctx.query);
    ctx.query.populate = populate;
    strapi.log.info('In page-populate middleware.');

    await next();
  };
};
