// Utilities to render Strapi "blocks" (rich text) to HTML strings.
// Safe for server-side usage in Astro; import and use with set:html.

export function escapeHtml(source = '') {
  const s = String(source ?? '');
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderInline(node) {
  if (!node) return '';

  // Links: { type: 'link', url, children: [...] }
  if (node.type === 'link' || node.url) {
    const url = escapeHtml(node.url ?? '#');
    const inner = (node.children ?? []).map(renderInline).join('');
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  }

  // Text node with optional marks
  if (node.type === 'text') {
    let html = escapeHtml(node.text ?? '');
    if (node.code) html = `<code>${html}</code>`;
    if (node.underline) html = `<u>${html}</u>`;
    if (node.italic) html = `<em>${html}</em>`;
    if (node.bold) html = `<strong>${html}</strong>`;
    return html;
  }

  // Fallback: render children if present
  return (node.children ?? []).map(renderInline).join('');
}

export function renderBlocks(blocks = []) {
  return (blocks ?? [])
    .map((b) => {
      if (!b) return '';
      switch (b.type) {
        case 'paragraph': {
          const children = (b.children ?? []).map(renderInline).join('');
          return `<p>${children}</p>`;
        }
        case 'heading': {
          const level = Math.min(Math.max(Number(b.level ?? 2), 1), 6);
          const children = (b.children ?? []).map(renderInline).join('');
          return `<h${level}>${children}</h${level}>`;
        }
        case 'quote': {
          const children = (b.children ?? []).map(renderInline).join('');
          return `<blockquote>${children}</blockquote>`;
        }
        case 'list': {
          const tag = b.format === 'ordered' || b.ordered ? 'ol' : 'ul';
          const items = (b.children ?? [])
            .map((li) => {
              const inner =
                (li.children ?? [])
                  .map((c) => {
                    if (c.type === 'paragraph') {
                      return (c.children ?? []).map(renderInline).join('');
                    }
                    return renderInline(c);
                  })
                  .join('') || renderInline(li);
              return `<li>${inner}</li>`;
            })
            .join('');
          return `<${tag}>${items}</${tag}>`;
        }
        case 'image': {
          const url = b.url ?? b.image?.url;
          if (!url) return '';
          const alt = escapeHtml(b.alt ?? b.image?.alternativeText ?? '');
          return `<img src="${url}" alt="${alt}" />`;
        }
        default: {
          const children = (b.children ?? []).map(renderInline).join('');
          return children ? `<div>${children}</div>` : '';
        }
      }
    })
    .join('');
}

// Renders the first paragraph with id="highlight" and the rest normally.
export function renderWithHighlight(blocks = []) {
  const list = blocks ?? [];
  const firstIndex = list.findIndex((b) => b?.type === 'paragraph');
  if (firstIndex < 0) return renderBlocks(list);

  const firstPara = list[firstIndex];
  const firstHtml = `<p id="highlight">${(firstPara.children ?? [])
    .map(renderInline)
    .join('')}</p>`;

  const rest = list.slice(0, firstIndex).concat(list.slice(firstIndex + 1));
  return firstHtml + renderBlocks(rest);
}

