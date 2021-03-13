import {ContentfulClientApi, createClient, Entry} from 'contentful';
import {Article, parseArticleFromContentfulArticle} from '../domain/article';
import {Article as ContentfulArticle} from '../domain/contentful/article';

const getClient = (): ContentfulClientApi => {
  return createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_API as string,
    resolveLinks: true,
  });
};
const getContent = async (
  contentType: string
): Promise<Entry<ContentfulArticle>[]> => {
  const client = getClient();
  const response = await client.getEntries<ContentfulArticle>({
    content_type: contentType,
  });
  return response.items;
};
const getDetailContent = async (
  id: string
): Promise<Entry<ContentfulArticle>> => {
  const client = getClient();
  return client.getEntry<ContentfulArticle>(id);
};
type FindAll = () => Promise<Article[]>;
export const findAll: FindAll = async () => {
  const entryArticles = await getContent('blog');
  return entryArticles.map((article) => {
    return parseArticleFromContentfulArticle(article);
  });
};
type FindFilter = (categoryId: string | null) => Promise<Article[]>;
export const findFilter: FindFilter = async (categoryId) => {
  const entryArticles = await getContent('blog');
  return entryArticles
    .map((article) => {
      return parseArticleFromContentfulArticle(article);
    })
    .filter((article) => {
      if (categoryId) {
        return article.category.id === categoryId;
      }
      return article;
    });
};
type FindDetail = (id: string) => Promise<Article>;
export const findDetail: FindDetail = async (id) => {
  const article = await getDetailContent(id);
  return parseArticleFromContentfulArticle(article);
};
