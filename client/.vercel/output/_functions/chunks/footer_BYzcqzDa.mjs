import { e as createComponent, m as maybeRenderHead, n as renderScript, r as renderTemplate, f as createAstro, h as addAttribute, k as renderComponent } from './astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import 'clsx';
import { i as fetchChapters, j as fetchGlobal } from './Layout_-3ypR12o.mjs';

const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  await fetchChapters();
  return renderTemplate`<!-- <nav id="secondary">
  <p>BROWSE IMAGES</p>
  <ol> --><!-- By Chapter with dropdown --><!-- <li><a href="/chapters">By Chapter</a>
      <ol>
        {chapters.map((ch: any) => (
          <li>
            <a href={\`/chapters/\${ch.slug}\`}>
              CHAPTER {ch?.slug}
            </a>
          </li>
        ))}
      </ol>
    </li> --><!-- By Creator --><!-- <li>
      <a href="/creators">By Creator</a>
    </li> --><!-- Chronologically with dropdown --><!-- <li>
      <a href="/chronologically">Chronologically</a>
      <ol>
        <li><a href="/chronologically/1811-1840">1811-1840</a></li>
        <li><a href="/chronologically/1841-1860">1841-1860</a></li>
        <li><a href="/chronologically/1861-1870">1861-1870</a></li>
        <li><a href="/chronologically/1871-1880">1871-1880</a></li>
        <li><a href="/chronologically/1881-1932">1881-1932</a></li>
      </ol>
    </li>
  </ol> --><!-- Search --><!-- <form action="/search" method="get">
    <input type="hidden" name="searchType" value="composite" />
    <input
      type="text"
      name="searchText"
      id="header-search"
      placeholder="Search this Site"
    />
    <input
      type="image"
      src="http://www.mappingthenation.com/img/backgrounds/header-search-submit.png"
      alt="GO"
      id="header-search-submit"
    />
  </form>
</nav> -->${maybeRenderHead()}<nav id="secondary"> <button class="browse-toggle" id="browse-toggle" aria-expanded="false">
&#9776; BROWSE IMAGES
</button> <p>BROWSE IMAGES</p> <ol> <li><a>By Chapter</a> <ol> <li><a href="/chapters/chapter-1">CHAPTER 1</a></li> <li><a href="/chapters/chapter-2">CHAPTER 2</a></li> <li><a href="/chapters/chapter-3">CHAPTER 3</a></li> <li><a href="/chapters/chapter-4">CHAPTER 4</a></li> <li><a href="/chapters/chapter-5">CHAPTER 5</a></li> </ol> </li> <li><a href="/creators">By Creator</a></li> <li><a>Chronologically</a> <ol> <li><a href="/chronologically/1811-1840">1811-1840</a></li> <li><a href="/chronologically/1841-1860">1841-1860</a></li> <li><a href="/chronologically/1861-1870">1861-1870</a></li> <li><a href="/chronologically/1871-1880">1871-1880</a></li> <li><a href="/chronologically/1881-1932">1881-1932</a></li> </ol> </li> </ol> <form action="/search" method="get"> <input type="text" name="searchText" id="header-search" placeholder="Search this Site"> <input type="image" src="/img/backgrounds/header-search-submit.png" alt="GO" id="header-search-submit"> </form> </nav> ${renderScript($$result, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/components/menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/components/menu.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { global } = Astro2.props;
  const logoUrl = global?.logo?.url ?? "/favicon.svg";
  const hoaUrl = global?.hoaLink?.url ?? "http://america100maps.com";
  const nav = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" }
  ];
  const path = Astro2.url.pathname;
  const isActive = (href) => href === "/" ? path === "/" : path.startsWith(href);
  return renderTemplate`${maybeRenderHead()}<header> <div class="header-inner"> <a id="logo" href="/"> <img${addAttribute(logoUrl, "src")} alt="Mapping the Nation" loading="lazy" decoding="async"> </a> <button class="mobile-menu-toggle" id="mobile-menu-btn" aria-label="Toggle menu">&#9776;</button> <nav id="primary"> <ol> ${nav.map((item) => renderTemplate`<li${addAttribute(isActive(item.href) ? "selected" : "", "class")}> <a${addAttribute(item.href, "href")}${addAttribute(isActive(item.href) ? "page" : void 0, "aria-current")}> ${item.label} </a> </li>`)} </ol> </nav> ${renderComponent($$result, "Menu", $$Menu, {})} <div id="hoa-site-link"> <a${addAttribute(hoaUrl, "href")} target="_blank" rel="noopener noreferrer">
New!! A History of America in 100 Maps
</a> </div> </div> </header> ${renderScript($$result, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/components/header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/components/header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const global = await fetchGlobal();
  const footer = global?.footer ?? null;
  const naviitems = footer?.naviitems;
  const linkToBook = footer?.linkToBook;
  return renderTemplate(_a || (_a = __template(['<!-- <script is:inline define:vars={{ footer }}>\n    console.log(footer);\n  <\/script> --><!-- Footer goes here --><!-- <div id="wrapper">\n<footer class="clearfix">\n    <nav id="footer-nav">\n        <ol>\n        <li><a href="home link here">HOME</a></li>\n        <li><a href="about link here">ABOUT</a></li>\n        <li><a href="blog link here">BLOG</a></li>\n        <li><a href="contact link here">CONTACT</a></li>\n        </ol>\n    </nav>\n    <p>BOOK PUBLISHED BY <strong> {linkToBook[0]?.link\n        ? <a href={linkToBook[0].link} target="_blank" rel="noopener noreferrer">{linkToBook[0]?.text ?? "University Of Chicago Press"}</a>\n        : (linkToBook?.[0]?.text ?? "University Of Chicago Press")\n      }</strong></p>\n    <p id="du-penrose"><a href="http://library.du.edu">Penrose Library at University of Denver</a></p>\n    <p id="footer-credit"><a href="https://www.followbright.com/">Website by Colorado Web Design</a></p>\n</footer>\n</div> -->', ""])), footer ? renderTemplate`${maybeRenderHead()}<div id="wrapper"><footer class="clearfix"><nav id="footer-nav"><ol>${naviitems.map((item) => renderTemplate`<li><a${addAttribute(item?.url ?? "", "href")}${addAttribute(item?.isExternal ? "_blank" : void 0, "target")}${addAttribute(item?.isExternal ? "noopener noreferrer" : void 0, "rel")}>${item?.label ?? "Link"}</a></li>`)}</ol></nav>${linkToBook && renderTemplate`<p>BOOK PUBLISHED BY
<strong>${linkToBook[0]?.link ? renderTemplate`<a${addAttribute(linkToBook[0]?.link, "href")}${addAttribute(linkToBook[0]?.isExternal ? "_blank" : void 0, "target")}${addAttribute(linkToBook[0]?.isExternal ? "noopener noreferrer" : void 0, "rel")}>${linkToBook[0]?.text ?? linkToBook[0]?.prefixText ?? "Learn more"}</a>` : linkToBook[0]?.text ?? ""}</strong></p>`}<p id="du-penrose"><a${addAttribute(linkToBook[1]?.link ?? "", "href")}${addAttribute(linkToBook[1]?.isExternal ? "_blank" : void 0, "target")}${addAttribute(linkToBook[1]?.isExternal ? "noopener noreferrer" : void 0, "rel")}>${linkToBook[1].text}</a></p><p id="footer-credit"><a${addAttribute(linkToBook[2]?.link ?? "", "href")}${addAttribute(linkToBook[2]?.isExternal ? "_blank" : void 0, "target")}${addAttribute(linkToBook[2]?.isExternal ? "noopener noreferrer" : void 0, "rel")}>${linkToBook[2].text}</a></p></footer></div>` : renderTemplate`<p>No footer content.</p>`);
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/components/footer.astro", void 0);

export { $$Header as $, $$Footer as a };
