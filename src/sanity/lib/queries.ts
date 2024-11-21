import { defineQuery } from "next-sanity";

export const SERVICES_TITLES = defineQuery(`
    *[_type == 'service' && status == 'active']{
  _id, slug, title
} 
`);

export const SERVICES_QUERY = defineQuery(`
  *[_type == 'service' && status == 'active']{
  _id, slug, title, image, short
} 
  `);

export const SERVICE_BY_ID_QUERY = defineQuery(`
  *[_type == 'service' && status == 'active' && _id == $id]{
  _id, slug, title, image, short, description
} 
  `);

export const POSTS_BY_SERVICE_QUERY = defineQuery(`
  *[_type == 'post' && service._ref == $serviceId] | order(_createdAt desc) {
  _createdAt, _id, mainImage
}
  `);

export const POST_BY_ID_QUERY = defineQuery(`
  *[_type == 'post' && _id == $id] {
  images, _createdAt, name
}
  `);

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == 'product' && status == 'active'] {
  thumbnail, _id, name, title, price
}
  `);
