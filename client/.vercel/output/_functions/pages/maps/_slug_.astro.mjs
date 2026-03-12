import { e as createComponent, f as createAstro, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as Fragment, u as unescapeHTML } from '../../chunks/astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { h as fetchMapBySlug, e as fetchMaps, $ as $$Layout } from '../../chunks/Layout_-3ypR12o.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/footer_BYzcqzDa.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const map = await fetchMapBySlug(slug);
  if (!map) {
    return Astro2.redirect("/404");
  }
  const getImageUrl = (format) => {
    const img = map.image;
    if (!img) return null;
    return img.url ? `${img.url}` : null;
  };
  const fullImageUrl = getImageUrl();
  const allMaps = await fetchMaps();
  const currentIndex = allMaps.findIndex((m) => m.slug === slug);
  const prevMap = currentIndex > 0 ? allMaps[currentIndex - 1] : null;
  const nextMap = currentIndex < allMaps.length - 1 ? allMaps[currentIndex + 1] : null;
  const firstMap = allMaps[0];
  const lastMap = allMaps[allMaps.length - 1];
  const metadata = [
    { label: "Title", value: map.mapTitle },
    { label: "Alternate Title", value: map.AlternateTitle },
    { label: "Creator", value: map.creatorName, isLink: true, searchIn: "creator" },
    { label: "Type of Resource", value: map.TypeofResource },
    { label: "Date Created", value: map.DateCreated },
    { label: "Digital Origin", value: map.DigitalOrigin },
    { label: "Topics", value: map.Topics, isLink: true, searchIn: "topic" },
    { label: "Places", value: map.Places },
    { label: "Dates", value: map.Dates },
    { label: "Subject Genre", value: map.SubjectGenre },
    { label: "Handle", value: map.Handle },
    { label: "Rights Statement", value: map.RightsStatement },
    { label: "Publisher", value: map.Publisher },
    { label: "Language", value: map.Language },
    { label: "Extent", value: map.Extent },
    { label: "Physical Note", value: map.PhysicalNote },
    { label: "Scale", value: map.Scale },
    { label: "Coordinates", value: map.Coordinates },
    { label: "Notes", value: map.Notes },
    { label: "Administrative Notes", value: map.AdministrativeNotes },
    { label: "Local Identifiers", value: map.LocalIdentifiers }
  ].filter((item) => item.value);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-wbzynyxx": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="wrapper" data-astro-cid-wbzynyxx> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-wbzynyxx": true })} <div id="content-container" class="clearfix" data-astro-cid-wbzynyxx> <!-- Navigation --> <table class="map-nav-table" data-astro-cid-wbzynyxx> <tbody data-astro-cid-wbzynyxx> <tr data-astro-cid-wbzynyxx> <td class="nav-spacer" data-astro-cid-wbzynyxx>&nbsp;</td> <td class="nav-cell" data-astro-cid-wbzynyxx> ${firstMap && currentIndex > 0 ? renderTemplate`<a class="duViewerLink"${addAttribute(`/maps/${firstMap.slug}`, "href")} data-astro-cid-wbzynyxx>First</a>` : renderTemplate`<span class="disabled-link" data-astro-cid-wbzynyxx>First</span>`} </td> <td class="nav-cell nav-cell-wide" data-astro-cid-wbzynyxx> ${prevMap ? renderTemplate`<a class="duViewerLink"${addAttribute(`/maps/${prevMap.slug}`, "href")} data-astro-cid-wbzynyxx>Previous</a>` : renderTemplate`<span class="disabled-link" data-astro-cid-wbzynyxx>Previous</span>`} </td> <td class="nav-cell" data-astro-cid-wbzynyxx> ${nextMap ? renderTemplate`<a class="duViewerLink"${addAttribute(`/maps/${nextMap.slug}`, "href")} data-astro-cid-wbzynyxx>Next</a>` : renderTemplate`<span class="disabled-link" data-astro-cid-wbzynyxx>Next</span>`} </td> <td class="nav-cell" data-astro-cid-wbzynyxx> ${lastMap && currentIndex < allMaps.length - 1 ? renderTemplate`<a class="duViewerLink"${addAttribute(`/maps/${lastMap.slug}`, "href")} data-astro-cid-wbzynyxx>Last</a>` : renderTemplate`<span class="disabled-link" data-astro-cid-wbzynyxx>Last</span>`} </td> <td class="nav-spacer-end" data-astro-cid-wbzynyxx>&nbsp;</td> </tr> </tbody> </table> <!-- Tabs --> <div id="tabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all" data-astro-cid-wbzynyxx> <ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist" data-astro-cid-wbzynyxx> <li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="tabs-1" aria-labelledby="ui-id-1" aria-selected="true" data-astro-cid-wbzynyxx> <a href="#tabs-1" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-1" data-astro-cid-wbzynyxx>Viewer</a> </li> <li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-2" aria-labelledby="ui-id-2" aria-selected="false" data-astro-cid-wbzynyxx> <a href="#tabs-2" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-2" data-astro-cid-wbzynyxx>Overview</a> </li> </ul> <!-- Viewer Tab --> <div id="tabs-1" aria-labelledby="ui-id-1" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-expanded="true" aria-hidden="false" data-astro-cid-wbzynyxx> <div id="iframe" class="viewer-container" data-astro-cid-wbzynyxx> ${fullImageUrl ? renderTemplate`<div class="zoom-container" data-astro-cid-wbzynyxx> <!-- Main image with lens --> <div class="img-zoom-container" id="img-zoom-container" data-astro-cid-wbzynyxx> <img id="map-image"${addAttribute(fullImageUrl, "src")}${addAttribute(map.mapTitle, "alt")} data-astro-cid-wbzynyxx> <div id="zoom-lens" class="img-zoom-lens" data-astro-cid-wbzynyxx></div> </div> <!-- Zoomed result panel --> <div id="zoom-result" class="img-zoom-result" data-astro-cid-wbzynyxx></div> </div>
            
            <p class="zoom-hint desktop-hint" data-astro-cid-wbzynyxx>Hover over image to zoom • Click to open full size</p>
            <p class="zoom-hint mobile-hint" data-astro-cid-wbzynyxx>Pinch to zoom • Double-tap to zoom • Drag to pan</p>` : renderTemplate`<p data-astro-cid-wbzynyxx>No image available for this map.</p>`} </div> </div> <!-- Overview Tab --> <div id="tabs-2" aria-labelledby="ui-id-2" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-expanded="false" aria-hidden="true" data-astro-cid-wbzynyxx> <table class="metadata-table" data-astro-cid-wbzynyxx> <tbody data-astro-cid-wbzynyxx> ${metadata.map((item) => renderTemplate`<tr data-astro-cid-wbzynyxx> <td class="heading" data-astro-cid-wbzynyxx>${item.label}</td> <td class="mapData" data-astro-cid-wbzynyxx> ${item.isLink ? renderTemplate`<a${addAttribute(`/search?searchText=${encodeURIComponent(item.value)}&searchIn=${item.searchIn || ""}`, "href")} data-astro-cid-wbzynyxx> ${item.value} </a>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(String(item.value).replace(/\n/g, "<br>"))}` })}`} <br data-astro-cid-wbzynyxx> </td> </tr>`)} </tbody> </table> ${map.Description && renderTemplate`<table class="metadata-table" style="margin-top: 20px;" data-astro-cid-wbzynyxx> <tbody data-astro-cid-wbzynyxx> <tr data-astro-cid-wbzynyxx> <td class="heading" data-astro-cid-wbzynyxx>Description</td> <td class="mapData" data-astro-cid-wbzynyxx>${map.Description}<br data-astro-cid-wbzynyxx></td> </tr> </tbody> </table>`} </div> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-wbzynyxx": true })} ` })} ${renderScript($$result, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/maps/[slug].astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/maps/[slug].astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/maps/[slug].astro";
const $$url = "/maps/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
