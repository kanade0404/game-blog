import {StringDate} from '../../common/date';
import {Category} from '../category';
import {Image} from '../image';
import {Tag} from '../tag';

export type Article = {
  category: Category;
  content: string;
  date: StringDate;
  image?: Image[];
  tag: Tag[];
  title: string;
};
