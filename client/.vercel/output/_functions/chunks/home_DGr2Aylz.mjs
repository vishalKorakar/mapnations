import { e as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute, k as renderComponent, u as unescapeHTML } from './astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { i as fetchChapters, f as fetchPageBySlug, $ as $$Layout } from './Layout_-3ypR12o.mjs';
import { $ as $$Header, a as $$Footer } from './footer_BYzcqzDa.mjs';
import 'clsx';
import { a as renderInline, r as renderBlocks } from './render_vnoDN9dY.mjs';

const $$Book = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside id="sidebar"> <!-- <a id="browse-chrono" href="http://www.mappingthenation.com/index.php/chronoIndex">Browse Images Chronologically</a>
  <a id="browse-creator" href="http://www.mappingthenation.com/index.php/creator">Browse Images by Map Creator</a> --> <div class="hr"><hr></div> <div id="book-promo"> <div> <img src="/img/general/book-cover.jpg" alt="Mapping the Nation Book Cover"> <h3><strong>Mapping the Nation:</strong> History<br>
&amp; Cartography in 19th Century America</h3> <a id="buy-now" href="https://cdcshoppingcart.uchicago.edu/Cart/PreferredBookbuyer.aspx?PRO=MAPNAT20" target="_blank">&nbsp;<br> <strong>Buy Now</strong></a> </div> <p>In <em>Mapping the Nation</em>, Susan Schulten traces the rise of new forms of mapping and graphic knowledge in American life. From statistical mapping to historical atlases, Americans confronted entirely new ways to think about cartography in the nineteenth century.</p> <!-- <a id="learn-more" href="link for about">Learn more about the book »</a> --> <p style="margin-bottom: -25px;">Winner of the 2013 Hundley Award for History</p> </div> </aside>`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/components/book.astro", void 0);

const $$Chapters = createComponent(async ($$result, $$props, $$slots) => {
  const chapters = await fetchChapters();
  const chapterItems = (chapters ?? []).map((c) => {
    const title = c?.title ?? "";
    const slug = c?.slug ?? "";
    const Description = c?.Description ?? "";
    const thumb = c?.chapterImage?.formats?.thumbnail?.url || "";
    return {
      title,
      slug,
      Description,
      imageUrl: thumb ? `${thumb}` : ""
    };
  });
  return renderTemplate`${maybeRenderHead()}<section id="content" class="chapter-list"> <h2><span>Browse Images by Book Chapter</span></h2> ${chapterItems.map((c) => renderTemplate`<article class="chapter"> <a${addAttribute(`/chapters/${c.slug}`, "href")}> ${c.imageUrl && renderTemplate`<img${addAttribute(`${c.imageUrl}`, "src")}${addAttribute(`${c.title} image`, "alt")}>`} <!-- \${STRAPI_URL}--> </a> <h3> <a${addAttribute(`/chapters/${c.slug}`, "href")}>${c.title}</a> </h3> ${c.Description && renderTemplate`<p>${c.Description}</p>`} <p class="chapter-link"> <a${addAttribute(`/chapters/${c.slug}`, "href")}>View ${c.title} Maps »</a> </p> </article>`)} </section>`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/components/chapters.astro", void 0);

const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await fetchPageBySlug("home");
  const info = pages?.Sections?.find((s) => s.__component === "sections.information");
  const blocks = info?.Description ?? [];
  const firstPara = blocks.find((b) => b.type === "paragraph");
  const restBlocks = blocks.filter((b, i) => b !== firstPara);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="wrapper"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Book", $$Book, {})} <div id="content-container" class="clearfix"> <!-- <section id="home-content">
          <h1><span>{pages[2]?.Sections[0]?.title}</span></h1>
          <p id="highlight">{pages[2]?.Sections[0]?.Description[0].children[0].text} <br> This is a companion site to the book, <em>Mapping the Nation</em>, which explores a tremendously creative era in American cartography.</p>
          <p> From maps of disease and the weather to the earliest maps of the national population, this was a period when the very concept of a map was reinvented. By the early twentieth century, maps had become common tools of analysis, communication, and visual representation in an increasingly complex nation.</p>
          <p> Today we live in a world that is saturated with maps and graphic knowledge. The maps on this site reveal how this involved a fundamentally new way of thinking.</p>
        </section> --> <section id="home-content"> <h1><span>${info?.title}</span></h1> ${firstPara && renderTemplate`<p id="highlight">${unescapeHTML((firstPara.children ?? []).map(renderInline).join(""))}</p>`} <div>${unescapeHTML(renderBlocks(restBlocks))}</div> </section> ${renderComponent($$result2, "Chapter", $$Chapters, {})} <!-- <section id="content" class="chapter-list">
          <h2><span>Browse Pages</span></h2>
          {Chapter.map((p: any) => (
            <article class="chapter">
              <h3><a href={\`/\${p?.slug}\`}>{p?.title}</a></h3>
            </article>
          ))}
        </section> --> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/home.astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Home as $, _page as _ };
