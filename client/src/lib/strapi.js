export const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN || "";

async function strapiFetch(path) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: STRAPI_TOKEN
      ? { Authorization: `Bearer ${STRAPI_TOKEN}` }
      : {},
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi error ${res.status}: ${text}`);
  }

  return res.json();
}

export async function fetchGlobal() {
  const json = await strapiFetch(`/api/global`);
  return json.data ?? null;
}

export async function fetchPages() {
  const json = await strapiFetch(`/api/pages`);
  return json.data ?? [];
}

export async function fetchPageBySlug(slug) {
  const json = await strapiFetch(
    `/api/pages/${encodeURIComponent(slug)}`
  );
  return json.data?.[0] ?? null;
}

export async function fetchChapters() {
  const json = await strapiFetch(`/api/chapters?sort[0]=order:asc`);
  return json.data ?? [];
}



export async function fetchChapterBySlug(slug) {
  const json = await strapiFetch(
    `/api/chapters?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[maps][populate]=*`
  );

  return json.data?.[0] ?? null;
}
