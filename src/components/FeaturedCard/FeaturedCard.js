import React from 'react';
import 'antd/lib/card/style/css';
import { Tabs, Icon } from 'antd';
import { dataForWidget } from './data';

const { TabPane } = Tabs;

const FeaturedCard = () => (
  <Tabs defaultActiveKey="2" tabPosition="left">
    {dataForWidget.map(item => (
      <TabPane
        key={item.label}
        tab={
          <span>
            <Icon type={item.name} />
            {item.label}
          </span>
        }
      >
        {item.component}
      </TabPane>
    ))}
  </Tabs>
);

export default FeaturedCard;
