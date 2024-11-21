import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { post } from './post'
import { postImage } from './postImage'
import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, post, postImage, product],
}
