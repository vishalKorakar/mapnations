// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: any }) {
    const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;
    if (!hookUrl) {
      strapi.log.warn('VERCEL_DEPLOY_HOOK_URL not set — skipping deploy hook subscription');
      return;
    }

    const DEBOUNCE_MS = 30_000;
    let pending: NodeJS.Timeout | null = null;

    const triggerDeploy = (reason: string) => {
      if (pending) clearTimeout(pending);
      pending = setTimeout(async () => {
        pending = null;
        try {
          const res = await fetch(hookUrl, { method: 'POST' });
          strapi.log.info(`Vercel deploy hook fired (${reason}): HTTP ${res.status}`);
        } catch (err) {
          strapi.log.error(`Vercel deploy hook failed: ${err}`);
        }
      }, DEBOUNCE_MS);
    };

    strapi.db.lifecycles.subscribe({
      afterCreate(event: any) { triggerDeploy(`create ${event.model.uid}`); },
      afterUpdate(event: any) { triggerDeploy(`update ${event.model.uid}`); },
      afterDelete(event: any) { triggerDeploy(`delete ${event.model.uid}`); },
    });

    strapi.log.info('Vercel deploy hook subscription active (30s debounce)');
  },
};
