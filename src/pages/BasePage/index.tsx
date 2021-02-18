import React, {FC} from 'react';
import {Helmet} from 'react-helmet';
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
      <Helmet>
        <title>{title ? `${title} | kanade.log` : 'kanade.log'}</title>
      </Helmet>
      <LayoutComponent categories={categories} body={pageComponent} />
    </>
  );
};

export default BasePage;
