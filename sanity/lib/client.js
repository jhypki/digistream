import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion: "2024-03-19",
  dataset: "production",
  projectId: "dbhtamq8",
  useCdn: true,
  token:
    "sk6V2sGK6hgRuZv9AW6ob7YDgBVPL2QtTRnCVpLlFtH4FVGRRyBkSlCd96FBFDsLgrw2fzqSXL1LqV0mf7Fv8kHNjos3fGBKZ4GCbTW068ifOTnVkVT2N1XdX44czVqcBAO6fPXFiVaM6R5WsY7oVQQFGOUbzhqYvZ4rBRbJZwpEE6JJ7CK8",
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
