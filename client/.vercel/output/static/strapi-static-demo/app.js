const STRAPI_URL = 'http://localhost:1339';
const GLOBAL_URL = `${STRAPI_URL}/api/global?populate=header.navbaritems,header.CTA,footer.naviitems,footer.linkToBook,footer.universitylogo`;

function getMediaUrl(path) {
	if (!path) return '';
	return path.startsWith('/') ? `${STRAPI_URL}${path}` : path;
}

async function load() {
	const res = await fetch(GLOBAL_URL, { headers: { Accept: 'application/json' } });
	if (!res.ok) {
		throw new Error(`Failed to fetch: ${res.status}`);
	}
	const json = await res.json();
	const attrs = json?.data?.attributes ?? {};

	document.getElementById('debug').textContent = JSON.stringify(attrs, null, 2);

	document.getElementById('site-title').textContent = attrs.title ?? '';
	document.getElementById('site-description').textContent = attrs.Description ?? '';

	const headerEl = document.getElementById('site-header');
	const navbar = (attrs.header?.navbaritems ?? [])
		.map((l) => `<a href="${l?.url ?? '#'}"${l?.isExternal ? ' target="_blank" rel="noreferrer"' : ''}>${l?.label ?? ''}</a>`)
		.join('');

	const cta = attrs.header?.CTA
		? `<a class="btn" href="${attrs.header.CTA.url ?? '#'}">${attrs.header.CTA.label ?? ''}</a>`
		: '';
	headerEl.innerHTML = `<nav>${navbar}${cta}</nav>`;

	const footerEl = document.getElementById('site-footer');
	footerEl.innerHTML = `
		<div>
			${(attrs.footer?.naviitems ?? [])
				.map((l) => `<a href="${l?.url ?? '#'}"${l?.isExternal ? ' target="_blank" rel="noreferrer"' : ''}>${l?.label ?? ''}</a>`)
				.join(' | ')}
		</div>
	`;

	const logoData = attrs.footer?.universitylogo?.data?.attributes;
	const img = document.getElementById('university-logo');
	if (logoData?.url) {
		img.src = getMediaUrl(logoData.formats?.thumbnail?.url ?? logoData.url);
		img.alt = logoData.alternativeText ?? '';
		img.width = logoData.width ?? '';
		img.height = logoData.height ?? '';
	}
}

load().catch((err) => {
	console.error(err);
	const dbg = document.getElementById('debug');
	dbg.textContent = `Error: ${String(err?.message || err)}`;
});


