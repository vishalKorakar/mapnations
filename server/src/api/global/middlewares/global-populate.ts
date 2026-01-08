/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = [
  "header.navbaritems", 
  "header.CTA", 
  "footer.naviitems", 
  "footer.linkToBook"
];

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log(ctx.query);
    ctx.query.populate = populate;
    strapi.log.info('In global-populate middleware.');

    await next();
  };
};
