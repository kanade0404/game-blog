import {Tag as ContentfulTag} from '../contentful/tag';

export type Tag = {
  id: string;
  name: string;
  slug: string;
};
type ParseTagFromContentfulTag = ({fields}: ContentfulTag) => Tag;

export const parseTagFromContentfulTag: ParseTagFromContentfulTag = ({
  fields,
  sys,
}) => {
  return {
    id: sys.id,
    name: fields.name,
    slug: fields.slug,
  };
};
