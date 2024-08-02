import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, BookOutlined, NotificationOutlined } from '@ant-design/icons';

const Sidebar = ({ setSelectedKey }) => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      onClick={({ key }) => setSelectedKey(key)}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<BookOutlined />}>
        Courses
      </Menu.Item>
      <Menu.Item key="3" icon={<NotificationOutlined />}>
        Notifications
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
