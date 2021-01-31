import {Menu, Layout} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import {Category} from '../../../domain/category';

const {Sider} = Layout;
const {SubMenu} = Menu;
type SidebarProps = {
  categories: Category[];
};
export const SideBar: React.FC<SidebarProps> = (props) => {
  const {categories} = props;
  const [collapse, setCollapse] = useState(true);
  const changeCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <Sider collapsible collapsed={collapse} onCollapse={changeCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal">
        <SubMenu key="sub1" icon={<UserOutlined />} title="カテゴリ">
          {categories.map((category) => (
            <Menu.Item key={category.name}>{category.name}</Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
};
