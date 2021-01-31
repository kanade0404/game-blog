import {Entry} from 'contentful';
import {Category, parseCategoryFromContentfulCategory} from '../category';
import {Article as ContentfulArticle} from '../contentful/article';
import {parseTagFromContentfulTag, Tag} from '../tag';
import {Image, parseImageFromContentfulImage} from '../image';
import {StringDate} from '../common/date';

export type Article = {
  id: string;
  content: any;
  title: string;
  updatedAt: StringDate;
  category: Category;
  tag: Tag[];
  image: Image[];
};
type ParseArticleFromContentfulArticle = (
  entry: Entry<ContentfulArticle>
) => Article;
export const parseArticleFromContentfulArticle: ParseArticleFromContentfulArticle = (
  entry
) => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    content: entry.fields.content,
    image: entry.fields.image
      ? entry.fields.image.map((i) => parseImageFromContentfulImage(i))
      : [],
    category: parseCategoryFromContentfulCategory(entry.fields.category),
    tag: entry.fields.tag.map((t) => parseTagFromContentfulTag(t)),
    updatedAt: entry.fields.updatedAt,
  };
};
