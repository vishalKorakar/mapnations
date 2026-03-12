import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DG1jkeOF.mjs';
import { manifest } from './manifest_GJ9oqkPQ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/chapters/_slug_.astro.mjs');
const _page5 = () => import('./pages/chronologically/_period_.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/creators.astro.mjs');
const _page8 = () => import('./pages/home.astro.mjs');
const _page9 = () => import('./pages/landingpage.astro.mjs');
const _page10 = () => import('./pages/maps/_slug_.astro.mjs');
const _page11 = () => import('./pages/search.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/chapters/[slug].astro", _page4],
    ["src/pages/chronologically/[period].astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/creators.astro", _page7],
    ["src/pages/home.astro", _page8],
    ["src/pages/LandingPage.astro", _page9],
    ["src/pages/maps/[slug].astro", _page10],
    ["src/pages/search.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1f392370-7b8c-47b1-834c-fbf6a389f795",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
