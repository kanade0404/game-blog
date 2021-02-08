import React, {FC} from 'react';
import LayoutComponent from '../coponents/Layout';
import {Category} from '../../domain/category';

type BasePageProps = {
  pageComponent: JSX.Element | JSX.Element[];
  categories: Category[];
};
const BasePage: FC<BasePageProps> = (props) => {
  const {pageComponent, categories} = props;
  return <LayoutComponent categories={categories} body={pageComponent} />;
};

export default BasePage;
