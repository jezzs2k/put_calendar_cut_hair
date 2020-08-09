import React from 'react';
import { Menu, Avatar } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Navbar = () => {
  const handleClick = (e) => {
    console.log('click', e);
  };

  return (
    <Menu onClick={handleClick} style={{ width: 256 }} mode='inline'>
      <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Calendar'>
        <Menu.Item key='5'>Morning</Menu.Item>
        <Menu.Item key='6'>Afternoon</Menu.Item>
        <Menu.Item key='7'>Night</Menu.Item>
      </SubMenu>
      <SubMenu
        key='sub4'
        title={
          <span>
            <Avatar
              size={40}
              src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            />
            <span>Name User</span>
          </span>
        }>
        <Menu.Item key='8'>Age: {18}</Menu.Item>
        <Menu.Item key='9'>Đã đặt lịch</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Navbar;
