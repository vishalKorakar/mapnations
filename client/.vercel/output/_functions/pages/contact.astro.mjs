import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { f as fetchPageBySlug, $ as $$Layout } from '../chunks/Layout_-3ypR12o.mjs';
import { r as renderBlocks } from '../chunks/render_vnoDN9dY.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/footer_BYzcqzDa.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await fetchPageBySlug("contact");
  if (!entry) {
    throw new Response("Contact page not found", { status: 404 });
  }
  const attrs = entry.Sections.find((s) => s.__component === "sections.information");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="wrapper"> ${renderComponent($$result2, "Header", $$Header, {})} <div id="content-container" class="clearfix"> <section id="content" class="chapter-list"> <div>${unescapeHTML(renderBlocks(attrs.Description))}</div> </section> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/contact.astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
