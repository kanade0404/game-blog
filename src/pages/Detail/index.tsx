import React, {FC, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';
import {Layout, Typography} from 'antd';
import {FolderOutlined} from '@ant-design/icons';
import Paragraph from 'antd/es/typography/Paragraph';
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import {findAll, findDetail} from '../../driver/ArticleDriver';
import {Article} from '../../domain/article';
import {SideBar} from '../coponents/SideBar';
import {HeaderComponent} from '../coponents/Header';
import {Category} from '../../domain/category';

const {Title} = Typography;
const {Content, Footer} = Layout;

type DetailProps = RouteComponentProps<{id: string}>;
const Detail: FC<DetailProps> = ({match}) => {
  const [articleState, setArticle] = useState<Article>();
  const [categories, setCategory] = useState<Category[]>([]);
  useEffect(() => {
    const getArticle = async () => {
      const article = await findDetail(match.params.id);
      setArticle(article);
      const articleList = await findAll();
      setCategory(articleList.map((value) => ({name: value.category.name})));
    };
    getArticle();
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
              <div key={articleState?.id} id={`${articleState?.id}`}>
                <FolderOutlined />
                <span>{articleState?.category.name}</span>
                <Typography>
                  <Title>{articleState?.title}</Title>
                  <Paragraph style={{whiteSpace: 'pre-wrap'}}>
                    {/* eslint-disable react/no-danger */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: documentToHtmlString(articleState?.content),
                      }}
                    />
                  </Paragraph>
                </Typography>
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>@py_kanade ©2021</Footer>
      </Layout>
    </Layout>
  );
};
export default Detail;
