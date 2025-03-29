import * as prismic from "@prismicio/client";
import "./client.js";
const enableAutoPreviews = (config) => {
  if (!config.cookies) {
    return;
  }
  const cookie = config.cookies.get(prismic.cookie.preview);
  if (cookie && /\.prismic\.io/.test(cookie)) {
    config.client.queryContentFromRef(cookie);
  }
};
const repositoryName$1 = "armaan-portfolio-website";
const sm = {
  repositoryName: repositoryName$1
};
const repositoryName = sm.repositoryName;
const routes = [
  { type: "page", path: "/", uid: "home" },
  { type: "page", path: "/:uid" },
  { type: "blogpost", path: "/blog/:uid" },
  { type: "project", path: "/project/:uid" }
];
const createClient = ({ cookies, ...config } = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...config
  });
  enableAutoPreviews({ client, cookies });
  return client;
};
export {
  createClient as c,
  repositoryName as r
};
