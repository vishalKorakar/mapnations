export const STRAPI_URL = import.meta.env.STRAPI_URL || "https://useful-bird-4f65a1d6ee.strapiapp.com";
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
  const json = await strapiFetch(`/api/pages?sort[0]=id:asc`);
  return json.data ?? [];
}

export async function fetchPageBySlug(slug) {
  const json = await strapiFetch(
    `/api/pages?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*&sort[0]=id:asc`
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

// Fetch ALL maps with image populated (handles multiple pages)
// Sorted by chapter order first, then map order within chapter (via API)
export async function fetchMaps() {
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

// Helper to extract year from mapYear field like "(1828)"
export function parseMapYear(mapYear) {
  if (!mapYear) return null;
  const match = String(mapYear).match(/\d{4}/);
  return match ? parseInt(match[0], 10) : null;
}

// Filter maps by year range
export async function fetchMapsByPeriod(startYear, endYear) {
  const allMaps = await fetchMaps();
  return allMaps.filter((map) => {
    const year = parseMapYear(map.mapYear);
    if (!year) return false;
    return year >= startYear && year <= endYear;
  });
}

// Fetch single map by slug
export async function fetchMapBySlug(slug) {
  const json = await strapiFetch(
    `/api/maps?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  return json.data?.[0] ?? null;
}

// Search maps by query (searches title, description, creator, topics, places)
export async function searchMaps(query) {
  if (!query || query.trim() === '') return [];
  
  const allMaps = await fetchMaps();
  const searchTerm = query.toLowerCase().trim();
  
  return allMaps.filter((map) => {
    const fields = [
      map.mapTitle,
      map.Description,
      map.creatorName,
      map.Topics,
      map.Places,
      map.mapYear,
      map.AlternateTitle,
      map.Notes,
    ];
    
    return fields.some((field) => 
      field && String(field).toLowerCase().includes(searchTerm)
    );
  });
}

// Fetch all blog articles (handles multiple pages)
export async function fetchArticles() {
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

// Fetch single article by slug
export async function fetchArticleBySlug(slug) {
  const json = await strapiFetch(
    `/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  return json.data?.[0] ?? null;
}