import {StringDate} from '../../common/date';
import {Category} from '../category';
import {Tag} from '../tag';

export type Article = {
  category: Category;
  content: string;
  date: StringDate;
  tag: Tag[];
  title: string;
};
