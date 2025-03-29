import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as each, d as subscribe } from "../../chunks/ssr.js";
import { getToolbarSrc, isFilled, asLink } from "@prismicio/client";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
import { r as repositoryName } from "../../chunks/prismicio.js";
import { B as Bounded, P as PrismicLink, a as Button } from "../../chunks/Button.js";
const PrismicPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toolbarSrc;
  let { repositoryName: repositoryName2 } = $$props;
  let { routePrefix = "preview" } = $$props;
  let { routePrefixName = routePrefix } = $$props;
  if ($$props.repositoryName === void 0 && $$bindings.repositoryName && repositoryName2 !== void 0) $$bindings.repositoryName(repositoryName2);
  if ($$props.routePrefix === void 0 && $$bindings.routePrefix && routePrefix !== void 0) $$bindings.routePrefix(routePrefix);
  if ($$props.routePrefixName === void 0 && $$bindings.routePrefixName && routePrefixName !== void 0) $$bindings.routePrefixName(routePrefixName);
  toolbarSrc = getToolbarSrc(repositoryName2);
  return `${$$result.head += `<!-- HEAD_svelte-92dhp6_START --><script defer${add_attribute("src", toolbarSrc, 0)}><\/script><!-- HEAD_svelte-92dhp6_END -->`, ""}`;
});
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img src="/Socials/MdiGithub.svg" alt="Github">`;
});
const LinkedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img src="/Socials/StreamlineLinkedinSolid.svg" alt="LinkedIn">`;
});
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img src="/Socials/LineMdTwitterX.svg" alt="Twitter">`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { settings } = $$props;
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0) $$bindings.settings(settings);
  return `${validate_component(Bounded, "Bounded").$$render($$result, { as: "footer", class: "text-slate-600" }, {}, {
    default: () => {
      return `<div class="container mx-auto flex mt-20 flex-col items-center justify-between gap-6 py-8 sm:flex-row"><div class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start"><a href="/" class="text-xl font-extrabold tracking-tighter text-slate-100 transition-color duration-150 hover:text-yellow-400">${escape(settings.data.name)}</a> <span class="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline" data-svelte-h="svelte-1ipwiex">/</span> <p class="text-sm text-slate-300">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} ${escape(settings.data.name)}</p></div> <nav class="navigation"><ul class="flex items-center gap-1">${each(settings.data.nav_item, ({ link, label }, index) => {
        return `<li>${validate_component(PrismicLink, "PrismicLink").$$render(
          $$result,
          {
            field: link,
            class: "block px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          },
          {},
          {
            default: () => {
              return `${escape(label)}`;
            }
          }
        )}</li> ${index < settings.data.nav_item.length - 1 ? `<span class="text-4xl font-thin leading-[0] text-slate-400" data-svelte-h="svelte-1bb0in4">/</span>` : ``}`;
      })}</ul></nav> <div class="socials inline-flex justify-center sm:justify-end">${isFilled.link(settings.data.github_link) ? `${validate_component(PrismicLink, "PrismicLink").$$render(
        $$result,
        {
          field: settings.data.github_link,
          class: "p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-yellow-400",
          "aria-label": settings.data.name + " on Github"
        },
        {},
        {
          default: () => {
            return `${validate_component(Github, "Github").$$render($$result, {}, {}, {})}`;
          }
        }
      )}` : ``} ${isFilled.link(settings.data.linkdin_link) ? `${validate_component(PrismicLink, "PrismicLink").$$render(
        $$result,
        {
          field: settings.data.linkdin_link,
          class: "p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-yellow-400",
          "aria-label": settings.data.name + " on Linkedin"
        },
        {},
        {
          default: () => {
            return `${validate_component(LinkedIn, "LinkedIn").$$render($$result, {}, {}, {})}`;
          }
        }
      )}` : ``} ${isFilled.link(settings.data.twitter_link) ? `${validate_component(PrismicLink, "PrismicLink").$$render(
        $$result,
        {
          field: settings.data.twitter_link,
          class: "p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-yellow-400",
          "aria-label": settings.data.name + " on Twitter"
        },
        {},
        {
          default: () => {
            return `${validate_component(Twitter, "Twitter").$$render($$result, {}, {}, {})}`;
          }
        }
      )}` : ``}</div></div>`;
    }
  })}`;
});
const NavBarLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { field } = $$props;
  let { label } = $$props;
  let { onLinkClick } = $$props;
  let { type } = $$props;
  const path = asLink(field);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.onLinkClick === void 0 && $$bindings.onLinkClick && onLinkClick !== void 0) $$bindings.onLinkClick(onLinkClick);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  isActive = path && $page.url.pathname.includes(path);
  $$unsubscribe_page();
  return `${type === "desktop" ? `${validate_component(PrismicLink, "PrismicLink").$$render(
    $$result,
    {
      class: "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900",
      field,
      "aria-current": isActive ? "page" : void 0
    },
    {},
    {
      default: () => {
        return `<span${add_attribute("class", `absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? "translate-y-6" : "translate-y-8"}`, 0)}></span> <span class="relative">${escape(label)}</span>`;
      }
    }
  )}` : `${validate_component(PrismicLink, "PrismicLink").$$render(
    $$result,
    {
      class: "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900",
      field,
      "aria-current": isActive ? "page" : void 0
    },
    {},
    {
      default: () => {
        return `<span${add_attribute("class", `absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? "translate-y-6" : "translate-y-16"}`, 0)}></span> <span class="relative">${escape(label)}</span>`;
      }
    }
  )}`}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img src="/Icons/IcRoundMenu.svg" alt="Menu">`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img src="/Icons/IcRoundClose.svg" alt="Close">`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { settings } = $$props;
  let open = false;
  function onLinkClick() {
    open = false;
  }
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0) $$bindings.settings(settings);
  return `<header class="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 relative"><nav><div class="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m4 md:flex-row md:items-center md:rounded-xl"><div class="flex items-center justify-between"><a href="/" aria-label="Homepage" class="text-xl font-extrabold tracking-tighter text-slate-900">${escape(settings.data.name)}</a> <button${add_attribute("aria-expanded", open, 0)} aria-label="Open Menu" class="block p-2 text-2xl text-slate-800 md:hidden">${validate_component(Menu, "IconMenu").$$render($$result, {}, {}, {})}</button></div>  <ul${add_attribute("class", `fixed inset-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-[100%]"}`, 0)}><li><button${add_attribute("aria-expanded", open, 0)} aria-label="Close Menu" class="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden">${validate_component(Close, "IconClose").$$render($$result, {}, {}, {})}</button></li> ${each(settings.data.nav_item, ({ label, link }) => {
    return `<li class="first:mt-8">${validate_component(NavBarLink, "NavBarLink").$$render(
      $$result,
      {
        field: link,
        label,
        onLinkClick,
        type: "mobile"
      },
      {},
      {}
    )} </li>`;
  })} ${isFilled.link(settings.data.cta_link) ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      linkField: settings.data.cta_link,
      label: settings.data.cta_label
    },
    {},
    {}
  )}` : ``}</ul>  <ul class="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">${each(settings.data.nav_item, ({ label, link }) => {
    return `<li>${validate_component(NavBarLink, "NavBarLink").$$render(
      $$result,
      {
        field: link,
        label,
        onLinkClick,
        type: "desktop"
      },
      {},
      {}
    )} </li>`;
  })} ${isFilled.link(settings.data.cta_link) ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      linkField: settings.data.cta_link,
      label: settings.data.cta_label,
      class: "ml-3"
    },
    {},
    {}
  )}` : ``}</ul></div></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1veofet_START -->${$$result.title = `<title>${escape($page.data.title)}</title>`, ""}${$page.data.meta_description ? `<meta name="description"${add_attribute("content", $page.data.meta_description, 0)}>` : ``}${$page.data.meta_title ? `<meta name="og:title"${add_attribute("content", $page.data.meta_title, 0)}>` : ``}${$page.data.meta_image ? `<meta name="og:image"${add_attribute("content", $page.data.meta_image, 0)}> <meta name="twitter:card" content="summary_large_image">` : ``}<!-- HEAD_svelte-1veofet_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, { settings: data.settings }, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> <div class="background-gradient absolute inset-0 -z-50 max-h-screen"></div> <div class="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div> ${validate_component(Footer, "Footer").$$render($$result, { settings: data.settings }, {}, {})} ${validate_component(PrismicPreview, "PrismicPreview").$$render($$result, { repositoryName }, {}, {})}`;
});
export {
  Layout as default
};
