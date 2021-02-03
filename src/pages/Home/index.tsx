import React, {FC, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Typography, Divider} from 'antd';
import {FolderOutlined} from '@ant-design/icons';
import {RouteComponentProps} from 'react-router';
import {findAll} from '../../driver/ArticleDriver';
import {Category} from '../../domain/category';
import {Article} from '../../domain/article';
import BasePage from '../Base';

const {Title, Link} = Typography;

const Home: FC<RouteComponentProps> = ({history, location, match}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const initArticle = async () => {
      const articleList = await findAll();
      const categoryList = articleList.map((article) => ({
        name: article.category.name,
      }));
      setArticles(articleList);
      setCategories(categoryList);
    };
    initArticle();
  }, []);
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
    <BasePage
      history={history}
      location={location}
      match={match}
      pageComponent={articleListElement}
      categories={categories}
    />
  );
};

export default Home;
