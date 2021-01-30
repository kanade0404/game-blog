import {Dispatch, SetStateAction, useState} from 'react';
import {Article} from '../../../../domain/article';
import {Category} from '../../../../domain/category';

type UseArticle = (
  initArticles?: Article[]
) => {
  articles: Article[];
  categories: Category[];
  setArticles: Dispatch<SetStateAction<Article[]>>;
  setCategoriesFromArticles: (articles: Article[]) => void;
};
export const useArticle: UseArticle = (initArticles) => {
  const [articleState, setArticles] = useState<Article[]>(initArticles || []);
  const [categoryState, setCategories] = useState<Category[]>([]);
  const setCategoriesFromArticles = (articles: Article[]) => {
    const fetchedCategories: Category[] = articles.map((article) => {
      return {
        name: article.category.name,
      };
    });
    setCategories(fetchedCategories);
  };
  setArticles(articleState);
  return {
    articles: articleState,
    categories: categoryState,
    setArticles,
    setCategoriesFromArticles,
  };
};
