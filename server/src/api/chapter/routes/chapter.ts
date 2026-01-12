/**
 * chapter router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::chapter.chapter',
{
    config: {
    find: {
        middlewares: ['api::chapter.chapter-populate'],
    },
},
});