export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg","Icons/IcRoundArrowOutward.svg","Icons/IcRoundClose.svg","Icons/IcRoundMenu.svg","Icons/MaterialSymbolsCircle.svg","noisetexture.jpg","smallroom.hdr","Socials/LineMdTwitterX.svg","Socials/MdiGithub.svg","Socials/StreamlineLinkedinSolid.svg","sounds/hit1.ogg","sounds/hit2.ogg","sounds/hit3.ogg","sounds/hit4.ogg","sounds/hit5.ogg","sounds/hit6.ogg","sounds/hit7.ogg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".ogg":"audio/ogg"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bn6KT8ya.js","app":"_app/immutable/entry/app.BeWV1Rnd.js","imports":["_app/immutable/entry/start.Bn6KT8ya.js","_app/immutable/chunks/entry.Dx_XQjC_.js","_app/immutable/chunks/scheduler.CxMoJ8E0.js","_app/immutable/chunks/index.Zvm5blzS.js","_app/immutable/entry/app.BeWV1Rnd.js","_app/immutable/chunks/scheduler.CxMoJ8E0.js","_app/immutable/chunks/index.BU1GOmTg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		routes: [
			{
				id: "/api/preview",
				pattern: /^\/api\/preview\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/preview/_server.ts.js'))
			},
			{
				id: "/[[preview=preview]]/blog/[uid]",
				pattern: /^(?:\/([^/]+))?\/blog\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/project/[uid]",
				pattern: /^(?:\/([^/]+))?\/project\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/[uid]",
				pattern: /^(?:\/([^/]+))?\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: preview } = await import ('../output/server/entries/matchers/preview.js')
			return { preview };
		},
		server_assets: {}
	}
}
})();
