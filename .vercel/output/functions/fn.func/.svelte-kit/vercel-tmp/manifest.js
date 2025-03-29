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
		client: {start:"_app/immutable/entry/start.Docxtx0h.js",app:"_app/immutable/entry/app.B71Q0YhY.js",imports:["_app/immutable/entry/start.Docxtx0h.js","_app/immutable/chunks/Cuini1LG.js","_app/immutable/chunks/bWX2GHql.js","_app/immutable/chunks/BkPo-Qp9.js","_app/immutable/entry/app.B71Q0YhY.js","_app/immutable/chunks/bWX2GHql.js","_app/immutable/chunks/cgZ089cL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
		prerendered_routes: new Set(["/slice-simulator","/slice-simulator/__data.json","/","/__data.json","/blog/visualizing-history-a-timeline-of-shared-borders","/blog/visualizing-history-a-timeline-of-shared-borders/__data.json","/blog/predicting-penalty-kicks-with-ai-a-dive-into-the-b","/blog/predicting-penalty-kicks-with-ai-a-dive-into-the-b/__data.json","/project/daily-nodes","/project/daily-nodes/__data.json","/project/oculoo","/project/oculoo/__data.json","/about","/about/__data.json","/home","/home/__data.json","/projects","/projects/__data.json","/blog","/blog/__data.json","/contact","/contact/__data.json"]),
		matchers: async () => {
			const { match: preview } = await import ('../output/server/entries/matchers/preview.js')
			return { preview };
		},
		server_assets: {}
	}
}
})();
