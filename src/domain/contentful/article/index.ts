import {StringDate} from '../../common/date';
import {Category} from '../category';
import {Image} from '../image';
import {Tag} from '../tag';

export type Article = {
  category: Category;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  date: StringDate;
  image?: Image[];
  tag: Tag[];
  title: string;
  updatedAt: StringDate;
  publishedAt: StringDate;
};
