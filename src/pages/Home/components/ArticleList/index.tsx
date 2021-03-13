import React, {FC, useEffect} from 'react';
import {FolderOutlined} from '@ant-design/icons';
import {Divider, Typography} from 'antd';
import {Article} from '../../../../domain/article';
import BasePage from '../../../BasePage';
import {Category} from '../../../../domain/category';
import {findFilter} from '../../../../driver/ArticleDriver';
import {findAll} from '../../../../driver/CategoryDriver';

const {Title, Link} = Typography;

type Props = {
  articles: Article[];
  categories: Category[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  categoryId: string | null;
};
export const ArticleList: FC<Props> = ({
  articles,
  categories,
  setArticles,
  setCategories,
  categoryId,
}) => {
  useEffect(() => {
    const initArticle = async () => {
      const articleList = await findFilter(categoryId);
      const categoryList = await findAll();
      setArticles(articleList);
      setCategories(categoryList);
    };
    initArticle();
  }, [categoryId]);
  const articleListElement = articles.map((article) => (
    <div key={article.id} id={`${article.id}`}>
      <Title level={3}>
        <Link href={`/article/${article.id}`}>{article.title}</Link>
      </Title>
      <FolderOutlined />
      <span>{article.category.name}</span>
      <Divider />
    </div>
  ));
  return (
    <BasePage pageComponent={articleListElement} categories={categories} />
  );
};
