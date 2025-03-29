import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Dknc85L2.js","_app/immutable/chunks/scheduler.CxMoJ8E0.js","_app/immutable/chunks/index.BU1GOmTg.js","_app/immutable/chunks/entry.Dx_XQjC_.js","_app/immutable/chunks/index.Zvm5blzS.js","_app/immutable/chunks/stores.vdf18rIF.js","_app/immutable/chunks/Button.B3y3HTbh.js"];
export const stylesheets = ["_app/immutable/assets/0.STqIdqbZ.css"];
export const fonts = ["_app/immutable/assets/urbanist-latin-ext-wght-normal.CikX8QxC.woff2","_app/immutable/assets/urbanist-latin-wght-normal.S2b5Uui_.woff2"];
