import React, {FC} from 'react';
import {Layout} from 'antd';
import {SideBar} from '../SideBar';
import {HeaderComponent} from '../Header';
import FooterComponent from '../Footer';
import {Category} from '../../../domain/category';

const {Content} = Layout;

type LayoutProps = {
  categories: Category[];
  body: JSX.Element | JSX.Element[];
  toProfile: () => void;
};
const LayoutComponent: FC<LayoutProps> = (props) => {
  const {categories, body, toProfile} = props;
  return (
    <Layout style={{minHeight: '100vh'}}>
      <SideBar categories={categories} toProfile={toProfile} />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content style={{margin: '0 16px'}}>
          <div
            className="site-layout-background"
            style={{padding: 24, minHeight: 360}}
          >
            {body}
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
