import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Typography, Layout, Breadcrumb} from 'antd';
import {FolderOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {findAll} from '../../driver/ArticleDriver';
import {TITLE} from '../../core/const';
import {SideBar} from '../coponents/SideBar';
import {Category} from '../../domain/category';
import {Article} from '../../domain/article';

const {Title, Text} = Typography;
const {Header, Content, Footer} = Layout;

const PageTitle = styled(Title)`
  display: inline-block;
`;
const PageTitleText = styled(Text)`
  color: white;
`;

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
        <Header className="site-layout-background">
          <PageTitle level={2}>
            <PageTitleText>{TITLE}</PageTitleText>
          </PageTitle>
        </Header>
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{padding: 24, minHeight: 360}}
          >
            <div>
              {articles.map((article) => (
                <div key={article.id} id={`${article.id}`}>
                  <Title level={3}>{article.title}</Title>
                  <FolderOutlined />
                  <span>{article.category.name}</span>
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
