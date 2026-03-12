import { e as createComponent, f as createAstro, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, h as addAttribute } from '../../chunks/astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { a as fetchArticleBySlug, b as fetchArticles, S as STRAPI_URL, $ as $$Layout } from '../../chunks/Layout_-3ypR12o.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/footer_BYzcqzDa.mjs';
import { r as renderBlocks } from '../../chunks/render_vnoDN9dY.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const article = await fetchArticleBySlug(slug);
  if (!article) {
    return Astro2.redirect("/404");
  }
  const allArticles = await fetchArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const formattedDate = article.articleDate ? new Date(article.articleDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }) : null;
  const getFeaturedImageUrl = () => {
    const img = article.image || article.featuredImage;
    if (img?.url) return `${img.url}`;
    return null;
  };
  const featuredImageUrl = getFeaturedImageUrl();
  const rawContent = renderBlocks(article.Contents || []);
  const articleContent = rawContent.replace(
    /src="(\/uploads\/[^"]+)"/g,
    `src="${STRAPI_URL}$1"`
  );
  const categories = (article.categories || []).map((c) => c.categoryTitle?.trim()).filter(Boolean);
  const categoryCounts = /* @__PURE__ */ new Map();
  allArticles.forEach((a) => {
    (a.categories || []).forEach((c) => {
      if (c.categoryTitle) {
        const t = c.categoryTitle.trim();
        categoryCounts.set(t, (categoryCounts.get(t) || 0) + 1);
      }
    });
  });
  const allCategories = Array.from(categoryCounts.keys()).sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="wrapper" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-4sn4zg3r": true })} <div id="content-container" class="clearfix" data-astro-cid-4sn4zg3r> <aside id="sidebar" data-astro-cid-4sn4zg3r> <div class="hr" data-astro-cid-4sn4zg3r><hr data-astro-cid-4sn4zg3r></div> <div class="sidebar-content" data-astro-cid-4sn4zg3r> <div data-astro-cid-4sn4zg3r> <h3 data-astro-cid-4sn4zg3r>Categories</h3> <div class="category-dropdown-wrap" data-astro-cid-4sn4zg3r> <select id="category-select" class="category-select" data-astro-cid-4sn4zg3r> <option value="" data-astro-cid-4sn4zg3r>All Posts</option> ${allCategories.map((cat) => renderTemplate`<option${addAttribute(cat, "value")} data-astro-cid-4sn4zg3r>${cat} (${categoryCounts.get(cat) || 0})</option>`)} </select> <span class="dropdown-arrow" data-astro-cid-4sn4zg3r>&#9662;</span> </div> <h3 data-astro-cid-4sn4zg3r>Links</h3> <ul data-astro-cid-4sn4zg3r> <li data-astro-cid-4sn4zg3r><a href="http://www.bostonraremaps.com/default.htm" data-astro-cid-4sn4zg3r>Boston Rare Maps</a></li> <li data-astro-cid-4sn4zg3r><a href="http://antiqueprintsblog.blogspot.com/" data-astro-cid-4sn4zg3r>Chris Lane's antique prints blog</a></li> <li data-astro-cid-4sn4zg3r><a href="http://www.davidrumsey.com" title="Enormous collection of maps." data-astro-cid-4sn4zg3r>David Rumsey Map Collection</a></li> <li data-astro-cid-4sn4zg3r><a href="http://bigthink.com/blogs/strange-maps/" data-astro-cid-4sn4zg3r>Frank Jacobs Strange Maps</a></li> <li data-astro-cid-4sn4zg3r><a href="http://makingmaps.net/" data-astro-cid-4sn4zg3r>Johy Krygier's Making Maps</a></li> <li data-astro-cid-4sn4zg3r><a href="http://maps.bpl.org/" title="Historic maps at the BPL" data-astro-cid-4sn4zg3r>Maps at the Boston Public Library</a></li> </ul> <h3 data-astro-cid-4sn4zg3r>Subscribe</h3> <ul data-astro-cid-4sn4zg3r> <li data-astro-cid-4sn4zg3r><a href="/blog/feed" data-astro-cid-4sn4zg3r>Entries (RSS)</a></li> </ul> </div> </div> </aside> <section id="content" class="browse blog-post" data-astro-cid-4sn4zg3r> <h1 data-astro-cid-4sn4zg3r>${article.title}</h1> <p class="post-meta" data-astro-cid-4sn4zg3r> ${formattedDate && renderTemplate`<span data-astro-cid-4sn4zg3r>${formattedDate}</span>`} ${categories.length > 0 && renderTemplate`<span data-astro-cid-4sn4zg3r> ${" | "} ${categories.map((cat, i) => renderTemplate`<span data-astro-cid-4sn4zg3r> <a${addAttribute(`/blog?category=${encodeURIComponent(cat)}`, "href")} data-astro-cid-4sn4zg3r>${cat}</a> ${i < categories.length - 1 && ", "} </span>`)} </span>`} ${" | "} <a href="#comments" data-astro-cid-4sn4zg3r>No Comments »</a> </p> <div class="post-body" data-astro-cid-4sn4zg3r>${unescapeHTML(articleContent)}</div> ${featuredImageUrl && renderTemplate`<div class="featured-image-viewer" data-astro-cid-4sn4zg3r> <div class="viewer-frame" data-astro-cid-4sn4zg3r> <div class="pan-container" id="pan-container" data-astro-cid-4sn4zg3r> <img id="viewer-img"${addAttribute(featuredImageUrl, "src")}${addAttribute(article.title, "alt")} data-astro-cid-4sn4zg3r> </div> <div class="viewer-controls" data-astro-cid-4sn4zg3r> <button class="ctrl-btn" id="zoom-in" title="Zoom in" data-astro-cid-4sn4zg3r>+</button> <div class="ctrl-group" data-astro-cid-4sn4zg3r> <button class="ctrl-btn small" id="pan-left" title="Pan left" data-astro-cid-4sn4zg3r>&#8249;</button> <button class="ctrl-btn small" id="pan-reset" title="Reset" data-astro-cid-4sn4zg3r>&#10005;</button> <button class="ctrl-btn small" id="pan-right" title="Pan right" data-astro-cid-4sn4zg3r>&#8250;</button> </div> <button class="ctrl-btn" id="zoom-out" title="Zoom out" data-astro-cid-4sn4zg3r>&minus;</button> <button class="ctrl-btn arrow" id="pan-up" title="Pan up" data-astro-cid-4sn4zg3r>&#8743;</button> <button class="ctrl-btn arrow" id="pan-down" title="Pan down" data-astro-cid-4sn4zg3r>&#8744;</button> </div> </div> <p class="viewer-hint" data-astro-cid-4sn4zg3r>Use controls to zoom and pan.</p> </div>`} <div class="post-navigation" data-astro-cid-4sn4zg3r> <a href="/blog" class="nav-link" data-astro-cid-4sn4zg3r>« Return to Blog Main Page</a> <div class="post-nav-right" data-astro-cid-4sn4zg3r> ${prevArticle && renderTemplate`<a${addAttribute(`/blog/${prevArticle.slug}`, "href")} class="nav-link" data-astro-cid-4sn4zg3r>« Previous Post</a>`} ${prevArticle && nextArticle && renderTemplate`<span class="nav-sep" data-astro-cid-4sn4zg3r> | </span>`} ${nextArticle && renderTemplate`<a${addAttribute(`/blog/${nextArticle.slug}`, "href")} class="nav-link" data-astro-cid-4sn4zg3r>Next Post »</a>`} </div> </div> <!-- Comments section --> <div id="comments" class="comments-section" data-astro-cid-4sn4zg3r> <h2 data-astro-cid-4sn4zg3r>Leave a Reply</h2> <div id="comment-success" style="display:none; color:#004146; margin-bottom:16px; font-family: Arial, Helvetica, sans-serif; font-size:14px;" data-astro-cid-4sn4zg3r>
Thank you for your comment! It will appear after review.
</div> <div id="comment-error" style="display:none; color:#962f11; margin-bottom:16px; font-family: Arial, Helvetica, sans-serif; font-size:14px;" data-astro-cid-4sn4zg3r></div> <form class="comment-form" id="comment-form" data-astro-cid-4sn4zg3r> <div class="form-row" data-astro-cid-4sn4zg3r> <input type="text" name="name" id="comment-name" required data-astro-cid-4sn4zg3r> <label for="comment-name" data-astro-cid-4sn4zg3r>Name (required)</label> </div> <div class="form-row" data-astro-cid-4sn4zg3r> <input type="email" name="email" id="comment-email" required data-astro-cid-4sn4zg3r> <label for="comment-email" data-astro-cid-4sn4zg3r>Mail (will not be published) (required)</label> </div> <div class="form-row" data-astro-cid-4sn4zg3r> <input type="url" name="website" id="comment-website" data-astro-cid-4sn4zg3r> <label for="comment-website" data-astro-cid-4sn4zg3r>Website</label> </div> <div class="form-row" data-astro-cid-4sn4zg3r> <textarea name="comment" id="comment-text" rows="10" data-astro-cid-4sn4zg3r></textarea> </div> <div class="form-row" data-astro-cid-4sn4zg3r> <button type="submit" class="submit-btn" id="comment-submit" data-astro-cid-4sn4zg3r>Submit Comment</button> </div> </form> </div> </section> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4sn4zg3r": true })} ` })} ${renderScript($$result, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
