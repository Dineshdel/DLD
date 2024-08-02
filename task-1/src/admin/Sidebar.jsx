import './sidebar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Newstudent from './Newstudent';
import Facuilty from './Faculty';
// import FeedbackAdd from '../feedback/FeedbackAdd';
import About from './About';
import Tab from './Tab'
import Footer from '../components/Footer';
import Dashboard2 from '../feedback/Dashboard2';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { AutoComplete, Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <div><Tab/></div>;
      case '2':
        return <div><Facuilty /></div>;
      case '3':
        // return <div><FeedbackAdd /></div>;
        case '4':
          // return <div><Feedback /></div>;
          case '5':
            return <div><Dashboard2 /></div>;
      default:
        return <div><About /></div>;
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}  >
        <div className="w-42 m-4 h-10  rounded-lg" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onSelect={({ key }) => setSelectedKey(key)}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Student',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Faculty',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: 'Feedback',
            },
          ]}
        />
      </Sider>
      <Layout>
      
        <Header
      
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
           <div className="font-bold" >
           <h1> Admin Dashboard</h1>
           
           </div>
           <div className="ml-96 pl-64"></div>
           <nav className="hidden md:block">
            <ul className="flex space-x-4 ">
              <li className="hover:text-red-500 pl-96 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">Settings</li>
              <Link to='/'>
              <li className="hover:text-red-500 cursor-pointer">Logout</li>
              </Link>
            </ul>
          </nav>

         
           

        </Header>
        
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 'auto',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </Content>
      

      </Layout>
     
    </Layout>
    
  );
};

export default App;
