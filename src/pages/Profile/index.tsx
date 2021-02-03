import React, {FC, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';
import {Category} from '../../domain/category';
import {findAll} from '../../driver/ArticleDriver';
import Template from './components/Template';
import Base from '../Base';

const Profile: FC<RouteComponentProps> = ({history, location, match}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const initCategory = async () => {
      const articleList = await findAll();
      const categoryList = articleList.map((article) => ({
        name: article.category.name,
      }));
      setCategories(categoryList);
    };
    initCategory();
  }, []);
  return (
    <Base
      history={history}
      location={location}
      match={match}
      pageComponent={<Template />}
      categories={categories}
    />
  );
};

export default Profile;
