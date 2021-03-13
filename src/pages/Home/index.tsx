import React, {FC, useState} from 'react';
import 'antd/dist/antd.css';
import {Category} from '../../domain/category';
import {Article} from '../../domain/article';
import {ArticleList} from './components/ArticleList';
import {useQuery} from './modules/useQuery';

const Home: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const categoryId = useQuery();
  return (
    <ArticleList
      articles={articles}
      categories={categories}
      setArticles={setArticles}
      setCategories={setCategories}
      categoryId={categoryId}
    />
  );
};

export default Home;
