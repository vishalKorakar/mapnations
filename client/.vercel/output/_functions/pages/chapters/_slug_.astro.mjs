import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../../chunks/astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { c as fetchChapterBySlug, $ as $$Layout } from '../../chunks/Layout_-3ypR12o.mjs';
import 'clsx';
import { $ as $$Header, a as $$Footer } from '../../chunks/footer_BYzcqzDa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$MapCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MapCard;
  const { map } = Astro2.props;
  const title = map?.mapTitle ?? "Untitled map";
  const desc = map?.Description ?? "";
  const year = map?.mapYear ?? "";
  const author = map?.creatorName ?? "";
  const slug = map?.slug ?? "";
  const img = map?.image?.formats?.thumbnail?.url || null;
  const viewerUrl = map?.viewerUrl || (slug ? `/maps/${slug}` : "#");
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(viewerUrl, "href")}> ${img && renderTemplate`<img alt="Map TN"${addAttribute(`${img}`, "src")}>`} <!-- \${STRAPI_URL}--> </a> <h3> <a${addAttribute(viewerUrl, "href")}>${title}</a> </h3> ${desc && renderTemplate`<p>${desc}</p>`} <p class="map-meta"> ${year && renderTemplate`<span>(${year})</span>`} ${year && author && renderTemplate`<span> | </span>`} ${author && renderTemplate`<span>${author}</span>`} <span> | </span> <a${addAttribute(viewerUrl, "href")}>View the Map »</a> </p> </article>`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/components/MapCard.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const chapter = await fetchChapterBySlug(slug);
  if (!chapter) {
    return Astro2.redirect("/404");
  }
  const maps = chapter?.maps ?? [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="wrapper"> ${renderComponent($$result2, "Header", $$Header, {})} <div id="content-container" class="clearfix"> <section id="content" class="browse chapter-maps"> <h1>${chapter.title}</h1> ${chapter.Description && renderTemplate`<p>${chapter.Description}</p>`} ${maps.length === 0 ? renderTemplate`<p>No maps found for this chapter.</p>` : maps.map((map) => renderTemplate`${renderComponent($$result2, "MapCard", $$MapCard, { "map": map })}`)} </section> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/chapters/[slug].astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/chapters/[slug].astro";
const $$url = "/chapters/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
