// src/components/Dashboard.jsx
import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Courses from './Courses';
import Notifications from './Notifications';

const { Sider, Content } = Layout;

const Dashboard = () => {
  const [selectedKey, setSelectedKey] = useState('1');

  let content;
  switch (selectedKey) {
    case '1':
      content = <Profile />;
      break;
    case '2':
      content = <Courses />;
      break;
    case '3':
      content = <Notifications />;
      break;
    default:
      content = <Profile />;
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Sidebar setSelectedKey={setSelectedKey} />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
