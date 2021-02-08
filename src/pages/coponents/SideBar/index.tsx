import {Menu, Layout} from 'antd';
import {FolderOutlined, UserOutlined} from '@ant-design/icons';
import React, {FC, useState} from 'react';
import {useHistory} from 'react-router';
import {Category} from '../../../domain/category';

const {Sider} = Layout;
const {SubMenu} = Menu;
type SidebarProps = {
  categories: Category[];
};
export const SideBar: FC<SidebarProps> = (props) => {
  const {categories} = props;
  const [collapse, setCollapse] = useState(true);
  const history = useHistory();
  const changeCollapse = () => {
    setCollapse(!collapse);
  };
  const toProfile = () => history.push('/profile');
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
