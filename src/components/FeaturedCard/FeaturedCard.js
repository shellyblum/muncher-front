import React from 'react';
import 'antd/lib/card/style/css';
import { Tabs } from 'antd';
import styled from 'styled-components';
import { dataForWidget } from './data';

const { TabPane } = Tabs;

const customStyles = {
  tabs: { display: 'flex', justifyContent: 'space-around', alignItems: 'space-around' },
  tabPane: { margin: '0px' }
};

const StyledTab = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Span = styled.span``;

const I = styled.i``;

const FeaturedCard = () => (
  <Tabs tabBarStyle={customStyles.tabs} defaultActiveKey="3" tabPosition="left">
    {dataForWidget.map(item => (
      <TabPane
        tabBarStyle={customStyles.tabPane}
        key={item.key}
        tab={
          <StyledTab>
            <Span>{item.label}</Span>
            <I className={item.name} aria-hidden="true" />
          </StyledTab>
        }
      >
        {item.component}
      </TabPane>
    ))}
  </Tabs>
);

export default FeaturedCard;
