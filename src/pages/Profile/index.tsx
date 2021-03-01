import React, {FC, useEffect, useState} from 'react';
import {Category} from '../../domain/category';
import {findAll} from '../../driver/ArticleDriver';
import Template from './components/Template';
import BasePage from '../BasePage';

const Profile: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const initCategory = async () => {
      const articleList = await findAll();
      const categoryList = articleList.map((article) => ({
        id: article.category.id,
        name: article.category.name,
      }));
      setCategories(categoryList);
    };
    initCategory();
  }, []);
  return (
    <BasePage
      pageComponent={<Template />}
      categories={categories}
      title="プロフィール"
    />
  );
};

export default Profile;
