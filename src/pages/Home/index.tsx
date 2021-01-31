import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Typography, Layout, Divider} from 'antd';
import {FolderOutlined} from '@ant-design/icons';
import {findAll} from '../../driver/ArticleDriver';
import {SideBar} from '../coponents/SideBar';
import {Category} from '../../domain/category';
import {Article} from '../../domain/article';
import {HeaderComponent} from '../coponents/Header';

const {Title, Link} = Typography;
const {Content, Footer} = Layout;

const Home: React.FC = () => {
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
  return (
    <Layout style={{minHeight: '100vh'}}>
      <SideBar categories={categories} />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content style={{margin: '0 16px'}}>
          <div
            className="site-layout-background"
            style={{padding: 24, minHeight: 360}}
          >
            <div>
              {articles.map((article) => (
                <div key={article.id} id={`${article.id}`}>
                  <Title level={3}>
                    <Link href={`/article/${article.id}`}>{article.title}</Link>
                  </Title>
                  <FolderOutlined />
                  <span>{article.category.name}</span>
                  <Divider />
                </div>
              ))}
            </div>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>@py_kanade ©2021</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
