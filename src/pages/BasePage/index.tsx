import React, {FC} from 'react';
import {RouteComponentProps} from 'react-router';
import LayoutComponent from '../coponents/Layout';
import {Category} from '../../domain/category';

type BasePageProps = RouteComponentProps & {
  pageComponent: JSX.Element | JSX.Element[];
  categories: Category[];
};
const BasePage: FC<BasePageProps> = (props) => {
  const {history, pageComponent, categories} = props;
  const toProfile = () => {
    history.push('/profile');
  };
  return (
    <LayoutComponent
      categories={categories}
      body={pageComponent}
      toProfile={toProfile}
    />
  );
};

export default BasePage;
