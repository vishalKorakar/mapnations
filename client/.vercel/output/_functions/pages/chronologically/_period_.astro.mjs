import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { d as fetchMapsByPeriod, $ as $$Layout } from '../../chunks/Layout_-3ypR12o.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/footer_BYzcqzDa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$period = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$period;
  const periods = {
    "1811-1840": { start: 1811, end: 1840, label: "1811\u20131840" },
    "1841-1860": { start: 1841, end: 1860, label: "1841\u20131860" },
    "1861-1870": { start: 1861, end: 1870, label: "1861\u20131870" },
    "1871-1880": { start: 1871, end: 1880, label: "1871\u20131880" },
    "1881-1932": { start: 1881, end: 1932, label: "1881\u20131932" }
  };
  const { period } = Astro2.params;
  const periodConfig = periods[period ?? ""];
  if (!periodConfig) {
    return Astro2.redirect("/404");
  }
  const maps = await fetchMapsByPeriod(periodConfig.start, periodConfig.end);
  const getImageUrl = (map) => {
    const img = map.image;
    if (!img) return null;
    const file = img.formats?.thumbnail ?? img;
    return file?.url ? `${file.url}` : null;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="wrapper"> ${renderComponent($$result2, "Header", $$Header, {})} <div id="content-container" class="clearfix"> <section id="content" class="browse chrono"> <h1><span>Maps from ${periodConfig.label}</span></h1> <p>${maps.length} map${maps.length !== 1 ? "s" : ""} found</p> ${maps.length > 0 ? maps.map((map) => {
    const imgUrl = getImageUrl(map);
    return renderTemplate`<article> ${imgUrl && renderTemplate`<a${addAttribute(`/maps/${map.slug}`, "href")}> <img${addAttribute(imgUrl, "src")}${addAttribute(map.mapTitle, "alt")} loading="lazy"> </a>`} <h3> <a${addAttribute(`/maps/${map.slug}`, "href")}>${map.mapTitle}</a> </h3> <p>${map.Description}</p> <p class="map-meta"> ${map.creatorName && renderTemplate`<span>${map.creatorName}</span>`} ${map.mapYear && renderTemplate`<span> | ${map.mapYear}</span>`} </p> </article>`;
  }) : renderTemplate`<p>No maps found for this time period.</p>`} </section> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/chronologically/[period].astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/chronologically/[period].astro";
const $$url = "/chronologically/[period]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$period,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
