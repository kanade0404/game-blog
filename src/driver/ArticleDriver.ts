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
export const findAll: () => Promise<Article[]> = async () => {
  const entryArticles = await getContent('blog');
  return entryArticles.map((article) => {
    return parseArticleFromContentfulArticle(article as any);
  });
};
