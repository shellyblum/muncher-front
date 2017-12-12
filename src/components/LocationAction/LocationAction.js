import React from 'react';
import 'antd/lib/card/style/css';
import { Tabs, Button } from 'antd';
import Menu from '../../components/Menu/Menu';

const { TabPane } = Tabs;
const phoneNumber = 900300400;

const LocationAction = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Call Now" key="1">
      <Button
        type="primary"
        shape="circle"
        icon="phone"
        size="large"
        onClick={() => window.open(`tel:${phoneNumber}`)}
      />
    </TabPane>
    <TabPane tab="Book a seat" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Menu" key="3">
      <Menu grid="2fr" />
    </TabPane>
  </Tabs>
);

export default LocationAction;
