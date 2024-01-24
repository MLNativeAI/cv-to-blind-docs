import contentful, { EntryFieldTypes } from "contentful";

export interface DocPost {
  contentTypeId: "knowledgeBase";
  fields: {
    title: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
