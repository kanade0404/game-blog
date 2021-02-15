import {Entry} from 'contentful';
import {Category, parseCategoryFromContentfulCategory} from '../category';
import {Article as ContentfulArticle} from '../contentful/article';
import {parseTagFromContentfulTag, Tag} from '../tag';
import {StringDate} from '../common/date';

export type Article = {
  id: string;
  content: string;
  title: string;
  category: Category;
  tag: Tag[];
  createdAt: StringDate;
  updatedAt: StringDate;
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
    category: parseCategoryFromContentfulCategory(entry.fields.category),
    tag: entry.fields.tag.map((t) => parseTagFromContentfulTag(t)),
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
  };
};
