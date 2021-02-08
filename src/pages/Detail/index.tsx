import React, {FC, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';
import {Typography} from 'antd';
import {FolderOutlined} from '@ant-design/icons';
import Paragraph from 'antd/es/typography/Paragraph';
import ReactMarkdown from 'react-markdown';
import {findAll, findDetail} from '../../driver/ArticleDriver';
import {Article} from '../../domain/article';
import {Category} from '../../domain/category';
import BasePage from '../BasePage';

const {Title} = Typography;

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
  const body = (
    <div key={articleState?.id} id={`${articleState?.id}`}>
      <FolderOutlined />
      <span>{articleState?.category.name}</span>
      <Typography>
        <Title>{articleState?.title}</Title>
        <Paragraph style={{whiteSpace: 'pre-wrap'}}>
          <ReactMarkdown>{articleState?.content || ''}</ReactMarkdown>
        </Paragraph>
      </Typography>
    </div>
  );
  return <BasePage pageComponent={body} categories={categories} />;
};
export default Detail;
