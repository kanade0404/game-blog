import {Tag as ContentfulTag} from '../contentful/tag';

export type Tag = {
  name: string;
  slug: string;
};
type ParseTagFromContentfulTag = ({fields}: ContentfulTag) => Tag;

export const parseTagFromContentfulTag: ParseTagFromContentfulTag = ({
  fields,
}) => {
  return {
    name: fields.name,
    slug: fields.slug,
  };
};
