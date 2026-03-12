import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { b as fetchArticles, $ as $$Layout, S as STRAPI_URL } from '../chunks/Layout_-3ypR12o.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/footer_BYzcqzDa.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await fetchArticles();
  const categoryCounts = /* @__PURE__ */ new Map();
  articles.forEach((article) => {
    (article.categories || []).forEach((cat) => {
      if (cat.categoryTitle) {
        const title = cat.categoryTitle.trim();
        categoryCounts.set(title, (categoryCounts.get(title) || 0) + 1);
      }
    });
  });
  const categories = Array.from(categoryCounts.keys()).sort();
  const archives = /* @__PURE__ */ new Map();
  articles.forEach((article) => {
    if (article.articleDate) {
      const date = new Date(article.articleDate);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      const label = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      if (!archives.has(key)) {
        archives.set(key, { key, label });
      }
    }
  });
  const archiveList = Array.from(archives.values()).sort((a, b) => b.key.localeCompare(a.key));
  const toAbsolute = (url) => url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  const getImageUrl = (article) => {
    const img = article.image || article.featuredImage;
    if (img) {
      const file = img.formats?.thumbnail ?? img;
      return file?.url ? toAbsolute(file.url) : null;
    }
    const contents = article.Contents || [];
    const imageBlock = contents.find((b) => b.type === "image");
    if (imageBlock?.image?.url) {
      return toAbsolute(imageBlock.image.url);
    }
    return null;
  };
  const getExcerpt = (article) => {
    const content = article.Contents || [];
    const firstPara = content.find((b) => b.type === "paragraph");
    if (!firstPara) return "";
    const text = (firstPara.children || []).map((c) => c.text || "").join("");
    return text.length > 200 ? text.substring(0, 200) + "..." : text;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ijnerlr2": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="wrapper" data-astro-cid-ijnerlr2> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ijnerlr2": true })} <div id="content-container" class="clearfix" data-astro-cid-ijnerlr2> <aside id="sidebar" data-astro-cid-ijnerlr2> <div class="hr" data-astro-cid-ijnerlr2><hr data-astro-cid-ijnerlr2></div> <div class="sidebar-content" data-astro-cid-ijnerlr2> <div data-astro-cid-ijnerlr2> <h3 data-astro-cid-ijnerlr2>Categories</h3> <div class="category-dropdown-wrap" data-astro-cid-ijnerlr2> <select id="category-select" class="category-select" data-astro-cid-ijnerlr2> <option value="" data-astro-cid-ijnerlr2>All Posts</option> ${categories.map((cat) => renderTemplate`<option${addAttribute(cat, "value")} data-astro-cid-ijnerlr2>${cat} (${categoryCounts.get(cat) || 0})</option>`)} </select> <span class="dropdown-arrow" data-astro-cid-ijnerlr2>&#9662;</span> </div> <h3 data-astro-cid-ijnerlr2>Archives</h3> <ul data-astro-cid-ijnerlr2> ${archiveList.map((archive) => renderTemplate`<li data-astro-cid-ijnerlr2> <a${addAttribute(`/blog?archive=${archive.key}`, "href")} data-astro-cid-ijnerlr2>${archive.label}</a> </li>`)} </ul> <h3 data-astro-cid-ijnerlr2>Links</h3> <ul data-astro-cid-ijnerlr2> <li data-astro-cid-ijnerlr2><a href="http://www.bostonraremaps.com/default.htm" data-astro-cid-ijnerlr2>Boston Rare Maps</a></li> <li data-astro-cid-ijnerlr2><a href="http://antiqueprintsblog.blogspot.com/" data-astro-cid-ijnerlr2>Chris Lane's antique prints blog</a></li> <li data-astro-cid-ijnerlr2><a href="http://www.davidrumsey.com" title="Enormous collection of maps." data-astro-cid-ijnerlr2>David Rumsey Map Collection</a></li> <li data-astro-cid-ijnerlr2><a href="http://bigthink.com/blogs/strange-maps/" data-astro-cid-ijnerlr2>Frank Jacobs Strange Maps</a></li> <li data-astro-cid-ijnerlr2><a href="http://makingmaps.net/" data-astro-cid-ijnerlr2>Johy Krygier's Making Maps</a></li> <li data-astro-cid-ijnerlr2><a href="http://maps.bpl.org/" title="Historic maps at the BPL" data-astro-cid-ijnerlr2>Maps at the Boston Public Library</a></li> </ul> <h3 data-astro-cid-ijnerlr2>Subscribe</h3> <ul data-astro-cid-ijnerlr2> <li data-astro-cid-ijnerlr2><a href="/blog/feed" data-astro-cid-ijnerlr2>Entries (RSS)</a></li> </ul> </div> </div> </aside> <section id="content" class="browse" data-astro-cid-ijnerlr2> <h1 data-astro-cid-ijnerlr2><span data-astro-cid-ijnerlr2>Blog</span></h1> <p data-astro-cid-ijnerlr2>Here we can continue to explore the relationship between maps and history. I welcome your comments, and your maps!</p> <div id="filter-notice" data-astro-cid-ijnerlr2>
Filtering by category: <strong id="filter-label" data-astro-cid-ijnerlr2></strong>
&nbsp;&mdash;&nbsp;
<a href="#" id="clear-filter" data-astro-cid-ijnerlr2>Show all posts &times;</a> </div> ${articles.length > 0 ? articles.map((article) => {
    const imgUrl = getImageUrl(article);
    const excerpt = getExcerpt(article);
    const articleCategories = (article.categories || []).map((c) => c.categoryTitle?.trim()).filter(Boolean).join("|||");
    const archiveKey = article.articleDate ? (() => {
      const d = new Date(article.articleDate);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    })() : "";
    return renderTemplate`<article${addAttribute(articleCategories, "data-categories")}${addAttribute(archiveKey, "data-archive")} data-astro-cid-ijnerlr2> ${imgUrl && renderTemplate`<a${addAttribute(`/blog/${article.slug}`, "href")} data-astro-cid-ijnerlr2> <img${addAttribute(imgUrl, "src")}${addAttribute(article.title, "alt")} data-astro-cid-ijnerlr2> </a>`} <h3 data-astro-cid-ijnerlr2> <a${addAttribute(`/blog/${article.slug}`, "href")} data-astro-cid-ijnerlr2>${article.title}</a> </h3> ${excerpt && renderTemplate`<p data-astro-cid-ijnerlr2>${excerpt}</p>`} <p class="map-meta" data-astro-cid-ijnerlr2> ${article.articleDate && renderTemplate`<span data-astro-cid-ijnerlr2>(${article.articleDate})</span>`} ${article.categories && article.categories.length > 0 && renderTemplate`<span data-astro-cid-ijnerlr2> ${" | "} ${article.categories.map((cat, i) => renderTemplate`<span data-astro-cid-ijnerlr2> <a${addAttribute(`/blog?category=${encodeURIComponent(cat.categoryTitle?.trim())}`, "href")} data-astro-cid-ijnerlr2>${cat.categoryTitle?.trim()}</a> ${i < article.categories.length - 1 && ", "} </span>`)} </span>`} ${" | "} <a${addAttribute(`/blog/${article.slug}`, "href")} data-astro-cid-ijnerlr2>Read the Post »</a> </p> </article>`;
  }) : renderTemplate`<p data-astro-cid-ijnerlr2>No blog posts found.</p>`} <p id="no-results" data-astro-cid-ijnerlr2>No posts found in this category.</p> </section> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ijnerlr2": true })} ` })}  ${renderScript($$result, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/blog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/blog.astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
