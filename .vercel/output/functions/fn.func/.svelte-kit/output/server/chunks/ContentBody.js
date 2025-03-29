import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "./ssr.js";
import { H as Heading, S as SliceZone, c as components } from "./index2.js";
import { B as Bounded } from "./Button.js";
const ContentBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const formattedDate = new Date(data.page.data.date);
  let { page } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
  return `${validate_component(Bounded, "Bounded").$$render($$result, { tag: "article" }, {}, {
    default: () => {
      return `<div class="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">${validate_component(Heading, "Heading").$$render($$result, { tag: "h1" }, {}, {
        default: () => {
          return `${escape(page.data.title)}`;
        }
      })} <div class="flex gap-4 text-yellow-400">${each(page.tags, (tag) => {
        return `<span class="text-xl font-bold">${escape(tag)} </span>`;
      })}</div> <p class="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">${escape(formattedDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }))}</p> <div class="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">${validate_component(SliceZone, "SliceZone").$$render($$result, { slices: page.data.slices, components }, {}, {})}</div></div>`;
    }
  })}`;
});
export {
  ContentBody as C
};
