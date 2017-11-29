import React from 'react';
import 'antd/lib/card/style/css';
import { Tabs, Icon } from 'antd';
import styled from 'styled-components';
import LocationCard from '../LocationCard/LocationCard';

const { TabPane } = Tabs;

const FeaturedCard = ({ special, cards, toggleCTADialog, onCardClick }) => (
  <Tabs defaultActiveKey="1" tabPosition="top">
    <TabPane
      tab={
        <span>
          <Icon className="fa fa-star" />Special
        </span>
      }
      key="1"
    >
      <LocationCard
        id={special.id}
        key={special.title}
        {...special}
        toggleCTADialog={toggleCTADialog}
        onCardClick={onCardClick}
      />
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="android" />Tab 2
        </span>
      }
      key="2"
    >
      Tab 2
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon type="android" />Tab 3
        </span>
      }
      key="3"
    >
      sssd
    </TabPane>
  </Tabs>
);

export default FeaturedCard;
