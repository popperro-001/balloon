import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
        name: 'service',
        title: 'Related Service',
        type: 'reference',
        to: [{type: 'service'}]
    }),
    defineField({
        name: "mainImage",
        title: 'Main Image',
        type: "image",
      }),
    defineField({
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{
            type: 'postImage'
        }]
    }),

  ],
});
