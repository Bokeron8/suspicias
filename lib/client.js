import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "7amrtr5x",
  dataset: "production",
  apiVersion: "2023-06-09",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);