import {ContentfulClientApi, createClient, Entry} from 'contentful';
import {Category} from '../domain/category';

type ContentfulCategory = {
  id: string;
  name: string;
};
const getClient = (): ContentfulClientApi => {
  return createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_API as string,
    resolveLinks: true,
  });
};
const getContent = async (
  contentType: string
): Promise<Entry<ContentfulCategory>[]> => {
  const client = getClient();
  const response = await client.getEntries<ContentfulCategory>({
    content_type: contentType,
  });
  return response.items;
};

type FindAll = () => Promise<Category[]>;
export const findAll: FindAll = async () => {
  const entryCategories = await getContent('category');
  return entryCategories.map((entry) => {
    return {
      id: entry.sys.id,
      name: entry.fields.name,
    };
  });
};
