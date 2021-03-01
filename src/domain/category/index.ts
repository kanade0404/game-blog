import {Category as ContentfulCategory} from '../contentful/category';

export type Category = {
  id: string;
  name: string;
};
type ParseCategoryFromContentfulCategory = ({
  fields,
  sys,
}: ContentfulCategory) => Category;

export const parseCategoryFromContentfulCategory: ParseCategoryFromContentfulCategory = ({
  fields,
  sys,
}) => {
  return {
    id: sys.id,
    name: fields.name,
  };
};
