import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Icon } from 'react-fa';
import LocationCard from '../LocationCard/LocationCard';
import TimeLine from './components/TimeLine';
import IconWrapper from './FeaturedCard.styled';

const { TabPane } = Tabs;

const FeaturedCard = ({ special, cards, toggleCTADialog, redirectToLocation, onCardClick }) => (
  <Tabs defaultActiveKey="2" tabPosition="left">
    <TabPane
      tab={
        <IconWrapper>
          <Icon name="star" className="fa-star" /> Special
        </IconWrapper>
      }
      key="1"
    >
      <LocationCard
        id={special.id}
        key={special.title}
        {...special}
        redirectToLocation={redirectToLocation}
        toggleCTADialog={toggleCTADialog}
        onCardClick={onCardClick}
      />
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon name="bolt" className="fa-bolt" /> Featured list
        </span>
      }
      key="2"
    >
      <TimeLine onCardClick={onCardClick} cards={cards} />
    </TabPane>
    <TabPane
      tab={
        <span>
          <Icon name="money" className="fa-money" /> Fresh on site
        </span>
      }
      key="3"
    >
      <TimeLine onCardClick={onCardClick} cards={cards} />
    </TabPane>
  </Tabs>
);

export default FeaturedCard;

FeaturedCard.propTypes = {
  redirectToLocation: PropTypes.func,
  toggleCTADialog: PropTypes.func,
  onCardClick: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.string,
    city: PropTypes.string,
    orderType: PropTypes.arrayOf(PropTypes.string),
    lng: PropTypes.number,
    lat: PropTypes.number
  })).isRequired,
  special: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.string,
    city: PropTypes.string,
    orderType: PropTypes.arrayOf(PropTypes.string),
    lng: PropTypes.number,
    lat: PropTypes.number
  })
};

FeaturedCard.defaultProps = {
  redirectToLocation: () => null,
  toggleCTADialog: () => null,
  onCardClick: () => null,
  special: {
    id: '1',
    image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
    title: 'Title unavailable',
    text: 'Text unavailable',
    city: 'tel Aviv',
    action: 'Action button',
    selected: null,
    lng: 30,
    lat: 34
  }
};
