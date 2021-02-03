import {Menu, Layout} from 'antd';
import {FolderOutlined, UserOutlined} from '@ant-design/icons';
import React, {FC, useState} from 'react';
import {Category} from '../../../domain/category';

const {Sider} = Layout;
const {SubMenu} = Menu;
type SidebarProps = {
  categories: Category[];
  toProfile: () => void;
};
export const SideBar: FC<SidebarProps> = (props) => {
  const {categories, toProfile} = props;
  const [collapse, setCollapse] = useState(true);
  const changeCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <Sider collapsible collapsed={collapse} onCollapse={changeCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
        <SubMenu key="sub1" icon={<UserOutlined />} title="プロフィール">
          <Menu.Item key="1" onClick={toProfile}>
            プロフィール
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
        <SubMenu key="sub2" icon={<FolderOutlined />} title="カテゴリ">
          {categories.map((category) => (
            <Menu.Item key={category.name}>{category.name}</Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
};
