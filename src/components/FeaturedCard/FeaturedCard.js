import React from 'react';
import 'antd/lib/card/style/css';
import { Tabs } from 'antd';
import styled from 'styled-components';
import { dataForWidget } from './data';

const { TabPane } = Tabs;

const StyledTab = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Span = styled.span``;

const I = styled.i``;

const FeaturedCard = () => (
  <Tabs defaultActiveKey="2" tabPosition="top">
    {dataForWidget.map(item => (
      <TabPane
        tabBarStyle={{ margin: '0px' }}
        key={item.label}
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
