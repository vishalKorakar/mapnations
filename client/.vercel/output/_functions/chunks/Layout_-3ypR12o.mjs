import { e as createComponent, f as createAstro, p as renderHead, q as renderSlot, r as renderTemplate } from './astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import 'clsx';
/* empty css                               */

const STRAPI_URL = "https://useful-bird-4f65a1d6ee.strapiapp.com";
async function strapiFetch(path) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: {}
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }
  return res.json();
}
async function fetchGlobal() {
  const json = await strapiFetch(`/api/global`);
  return json.data ?? null;
}
async function fetchPages() {
  const json = await strapiFetch(`/api/pages?sort[0]=id:asc`);
  return json.data ?? [];
}
async function fetchPageBySlug(slug) {
  const json = await strapiFetch(
    `/api/pages?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&sort[0]=id:asc`
  );
  return json.data?.[0] ?? null;
}
async function fetchChapters() {
  const json = await strapiFetch(`/api/chapters?sort[0]=order:asc`);
  return json.data ?? [];
}
async function fetchChapterBySlug(slug) {
  const json = await strapiFetch(
    `/api/chapters?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[maps][populate]=*`
  );
  return json.data?.[0] ?? null;
}
async function fetchMaps() {
  let allMaps = [];
  let page = 1;
  let hasMore = true;
  while (hasMore) {
    const json = await strapiFetch(
      `/api/maps?populate=*&sort[0]=chapter.order:asc&sort[1]=order:asc&pagination[page]=${page}&pagination[pageSize]=100`
    );
    const maps = json.data ?? [];
    allMaps = allMaps.concat(maps);
    const pagination = json.meta?.pagination;
    if (!pagination || page >= pagination.pageCount) {
      hasMore = false;
    } else {
      page++;
    }
  }
  return allMaps;
}
function parseMapYear(mapYear) {
  if (!mapYear) return null;
  const match = String(mapYear).match(/\d{4}/);
  return match ? parseInt(match[0], 10) : null;
}
async function fetchMapsByPeriod(startYear, endYear) {
  const allMaps = await fetchMaps();
  return allMaps.filter((map) => {
    const year = parseMapYear(map.mapYear);
    if (!year) return false;
    return year >= startYear && year <= endYear;
  });
}
async function fetchMapBySlug(slug) {
  const json = await strapiFetch(
    `/api/maps?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  return json.data?.[0] ?? null;
}
async function fetchArticles() {
  let allArticles = [];
  let page = 1;
  let hasMore = true;
  while (hasMore) {
    const json = await strapiFetch(
      `/api/articles?sort[0]=createdAt:desc&populate=*&pagination[page]=${page}&pagination[pageSize]=100`
    );
    const articles = json.data ?? [];
    allArticles = allArticles.concat(articles);
    const pagination = json.meta?.pagination;
    if (!pagination || page >= pagination.pageCount) {
      hasMore = false;
    } else {
      page++;
    }
  }
  return allArticles;
}
async function fetchArticleBySlug(slug) {
  const json = await strapiFetch(
    `/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  return json.data?.[0] ?? null;
}

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Mapping the Nation" } = Astro2.props;
  await fetchGlobal();
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="title" content="Mapping the Nation - A Companion Site to Mapping the Nation by Susan Schulten"><meta name="description" content="Mapping the Nation - A Companion Site to Mapping the Nation by Susan Schulten"><title>Mapping the Nation - A Companion Site to Mapping the Nation by Susan Schulten</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/layouts/Layout.astro", void 0);

export { $$Layout as $, STRAPI_URL as S, fetchArticleBySlug as a, fetchArticles as b, fetchChapterBySlug as c, fetchMapsByPeriod as d, fetchMaps as e, fetchPageBySlug as f, fetchPages as g, fetchMapBySlug as h, fetchChapters as i, fetchGlobal as j };
