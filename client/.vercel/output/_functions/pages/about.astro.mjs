import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, u as unescapeHTML, h as addAttribute } from '../chunks/astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { $ as $$Header, a as $$Footer } from '../chunks/footer_Co4KUagC.mjs';
import { f as fetchPageBySlug, $ as $$Layout } from '../chunks/Layout_HMBnYElJ.mjs';
import { r as renderBlocks } from '../chunks/render_vnoDN9dY.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchPageBySlug("about");
  if (!pages) {
    throw new Response("Contact page not found", { status: 404 });
  }
  const attr = pages.attributes ?? pages;
  const infos = (attr.Sections ?? []).filter(
    (s) => s.__component === "sections.information"
  ).slice(0, 1);
  const book = (attr.Sections ?? []).filter(
    (s) => s.__component === "sections.information"
  ).slice(1, 2);
  const author = (attr.Sections ?? []).filter(
    (s) => s.__component === "sections.information"
  ).slice(2, 3);
  const reviews = (attr.Sections ?? []).filter(
    (s) => s.__component === "sections.information"
  ).slice(3, 4);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="wrapper"> ${renderComponent($$result2, "Header", $$Header, {})} <div id="content-container" class="clearfix"> <section id="content"> ${infos.map((p) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${p.title && renderTemplate`<h1><span>${p?.title}</span></h1>`}<div>${unescapeHTML(renderBlocks(p?.Description))}</div> ` })}`)} <br class="clearfloat"><br class="clearfloat"> ${book.map((b) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <h2><span>${b?.title}</span></h2> <center><h5><em>${b?.Description[0]?.children[0]?.text}</em></h5></center> <div id="book-promo"> <img${addAttribute(b?.Description[3]?.image?.url, "src")}${addAttribute(b?.Description[3]?.image?.alternativeText || "Book cover", "alt")}> <p><a${addAttribute(b?.Description[4]?.children[1]?.url, "href")} target="_blank">&nbsp;<br><strong>Buy Now</strong></a></p> </div> <p>${b?.Description[1]?.children[0]?.text}</p> <p>${b?.Description[2]?.children[0]?.text}</p> ` })}`)} <br class="clearfloat"><br class="clearfloat"> <!-- About the Author --> ${author.map((a) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${a.title && renderTemplate`<h2><span>${a?.title}</span></h2>`}<img class="alignleft" src="http://www.mappingthenation.com/img/general/susan-schulten-portrait.jpg" alt="Susan Schulten Portrait"> <div>${unescapeHTML(renderBlocks(a?.Description))}</div>` })}`)} <br class="clearfloat"><br class="clearfloat"> <!-- About the reviews --> ${reviews.map((r) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${r.title && renderTemplate`<h2><span>${r?.title}</span></h2>`}<blockquote> <p>${unescapeHTML(renderBlocks(r?.Description))}</p> </blockquote> ` })}`)} </section> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/about.astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
