import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
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
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "string" },
        { name: "ru", title: "Russian", type: "string" },
        { name: "kor", title: "Korean", type: "string" },
      ],
    }),
    defineField({
      name: "short",
      title: "Short",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "string" },
        { name: "ru", title: "Russian", type: "string" },
        { name: "kor", title: "Korean", type: "string" },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "text" },
        { name: "ru", title: "Russian", type: "text" },
        { name: "kor", title: "Korean", type: "text" },
      ],
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Inactive", value: "inactive" },
        ],
        layout: "radio",
      },
      initialValue: "active",
    }),
  ],
});
