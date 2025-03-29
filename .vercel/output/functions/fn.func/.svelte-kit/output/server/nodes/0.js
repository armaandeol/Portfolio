import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CuYInH_R.js","_app/immutable/chunks/bWX2GHql.js","_app/immutable/chunks/cgZ089cL.js","_app/immutable/chunks/Cuini1LG.js","_app/immutable/chunks/BkPo-Qp9.js","_app/immutable/chunks/cyiipm-Z.js","_app/immutable/chunks/B2D0GU3a.js"];
export const stylesheets = ["_app/immutable/assets/0.A6vJ5BqB.css"];
export const fonts = ["_app/immutable/assets/urbanist-latin-ext-wght-normal.CikX8QxC.woff2","_app/immutable/assets/urbanist-latin-wght-normal.S2b5Uui_.woff2"];
