import { defineField, defineType } from "sanity";

export const postImage = defineType({
  name: "postImage",
  title: "Post Image",
  type: "image",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
  options: {
    hotspot: true,
  },
});
