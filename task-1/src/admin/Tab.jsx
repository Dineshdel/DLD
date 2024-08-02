// Tab.js
import React, { useState } from 'react';
import { Tabs } from 'antd';
import Newstudent from './Newstudent';
import View from './View';
import Bulk from './Bulk'

const TabComponent = () => {
  const [tabPosition, setTabPosition] = useState('left');

  const components = [
    { label: 'New Student', Component: <Newstudent /> },
    { label: 'View Students', Component: <View /> },
    { label: 'Bulk Upload', Component: <Bulk /> },
  ];

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl mb-4">Student Management</h2> */}
      <Tabs
        tabPosition={tabPosition}
        items={components.map((item, index) => ({
          label: item.label,
          key: `tab-${index + 1}`,
          children: item.Component,
        }))}
      />
    </div>
  );
};

export default TabComponent;
