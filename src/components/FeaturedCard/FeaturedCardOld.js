import React from 'react';
import 'antd/lib/card/style/css';
import { Tabs } from 'antd';
import styled from 'styled-components';
import { dataForWidget } from './data';

const { TabPane } = Tabs;

const customStyles = {
  tabs: { display: 'flex', justifyContent: 'space-around', alignItems: 'center' },
  tabPane: { margin: '0px', flex: '1' }
};

const FeaturedCard = ({ filteredCards, toggleCTADialog, onCardClick }) => (
  <Tabs tabBarStyle={customStyles.tabs} defaultActiveKey="3" tabPosition="top">
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

const StyledTab = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Span = styled.span``;

const I = styled.i``;
