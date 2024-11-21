import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("postImage").title("Post Images"),
      S.documentTypeListItem("product").title("Products"),
    ]);
