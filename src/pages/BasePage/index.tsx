import React, {FC} from 'react';
import LayoutComponent from '../coponents/Layout';
import {Category} from '../../domain/category';

type BasePageProps = {
  pageComponent: JSX.Element | JSX.Element[];
  categories: Category[];
  title?: string;
};
const BasePage: FC<BasePageProps> = (props) => {
  const {pageComponent, categories, title} = props;
  return (
    <>
      <title>{title ? `${title} | kanade.log` : 'kanade.log'}</title>
      <LayoutComponent categories={categories} body={pageComponent} />
    </>
  );
};

export default BasePage;
