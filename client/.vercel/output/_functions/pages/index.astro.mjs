import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_cJ1N_z4V.mjs';
import 'piccolore';
import { $ as $$Home } from '../chunks/home_DGr2Aylz.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Home", $$Home, {})}`;
}, "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/index.astro", void 0);

const $$file = "/Users/vishalbalasubramanian/mapping-the-nations-mockup-test/client/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
