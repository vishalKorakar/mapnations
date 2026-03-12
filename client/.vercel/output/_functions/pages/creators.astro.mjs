import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { g as fetchMaps, $ as $$Layout } from '../chunks/Layout_HMBnYElJ.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/footer_Co4KUagC.mjs';
export { renderers } from '../renderers.mjs';

const $$Creators = createComponent(async ($$result, $$props, $$slots) => {
  const allMaps = await fetchMaps();
  const creatorMap = /* @__PURE__ */ new Map();
  allMaps.forEach((map) => {
    const creator = map.creatorName || "Unknown Creator";
    if (!creatorMap.has(creator)) {
      creatorMap.set(creator, []);
    }
    creatorMap.get(creator).push(map);
  });
  const creators = Array.from(creatorMap.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([name, maps]) => ({ name, maps }));
  const getImageUrl = (map) => {
    const img = map.image;
    if (!img) return null;
    const file = img.formats?.thumbnail ?? img;
    return file?.url ? `${file.url}` : null;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="wrapper"> ${renderComponent($$result2, "Header", $$Header, {})} <div id="content-container" class="clearfix"> <section id="content" class="browse"> <h1><span>Browse Maps by Creator</span></h1> <p>${creators.length} creator${creators.length !== 1 ? "s" : ""} found</p> ${creators.map((creator) => renderTemplate`<div class="creator-section"> <h2> <span>${creator.name}</span> <span class="map-count">(${creator.maps.length} map${creator.maps.length !== 1 ? "s" : ""})</span> </h2> ${creator.maps.map((map) => {
    const imgUrl = getImageUrl(map);
    const viewerUrl = map.slug ? `/maps/${map.slug}` : "#";
    return renderTemplate`<article> <a${addAttribute(viewerUrl, "href")}> ${imgUrl && renderTemplate`<img${addAttribute(imgUrl, "src")}${addAttribute(map.mapTitle, "alt")} loading="lazy">`} </a> <h3> <a${addAttribute(viewerUrl, "href")}>${map.mapTitle || "Untitled Map"}</a> </h3> ${map.Description && renderTemplate`<p>${map.Description}</p>`} <p class="map-meta"> ${map.mapYear && renderTemplate`<span>${map.mapYear}</span>`} ${map.mapYear && renderTemplate`<span> | </span>`} <a${addAttribute(viewerUrl, "href")}>View the Map »</a> </p> </article>`;
  })} </div>`)} </section> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/creators.astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/creators.astro";
const $$url = "/creators";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Creators,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
