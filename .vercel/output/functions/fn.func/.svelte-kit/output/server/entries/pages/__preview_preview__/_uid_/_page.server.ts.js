import { mapSliceZone, asText } from "@prismicio/client";
import { c as createClient } from "../../../../chunks/prismicio.js";
import "clsx";
const mapper = async ({ slice, context }) => {
  const { client } = context;
  if (!client) {
    console.error("Prismic client is not available in context");
    return { slice, items: [] };
  }
  try {
    const contentType = slice.primary.content_type;
    let items = [];
    if (contentType === "Blog") {
      items = await client.getAllByType("blogpost");
    } else if (contentType === "Project") {
      items = await client.getAllByType("project");
    } else {
      console.log("Unknown content type:", contentType);
    }
    return {
      slice,
      items
    };
  } catch (error) {
    return { slice, items: [] };
  }
};
const mappers = {
  content_index: mapper
};
async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const page = await client.getByUID("page", params.uid);
  const slices = await mapSliceZone(page.data.slices, mappers, { client });
  return {
    slices,
    title: asText(page.data.title),
    meta_description: page.data.meta_description,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image.url
  };
}
async function entries() {
  const client = createClient();
  const pages = await client.getAllByType("page");
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
export {
  entries,
  load
};
