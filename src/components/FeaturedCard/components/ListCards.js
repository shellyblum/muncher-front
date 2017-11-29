import React from 'react';
import { Timeline, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Image = styled.img`
  //border-radius: 50%;
  width: 20%;
`;

const MapBtn = styled.button`
  background: none;
  border: none;
  font-size: 3em;
  color: #e29a91;
  cursor: pointer;
`;

const FeaturedOnSite = ({ cards, onCardClick }) => (
  <Timeline pending={<a href="#">See more</a>}>
    {cards.map(card => (
      <Timeline.Item>
        <Wrapper>
          <Image alt="example" src={card.image} />
          {card.title}
          <MapBtn key={card.id} id={card.id} onClick={() => onCardClick(card.id)}>
            <Tooltip title="Show on map">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </Tooltip>
          </MapBtn>
        </Wrapper>
      </Timeline.Item>
    ))}
  </Timeline>
);

export default FeaturedOnSite;

FeaturedOnSite.propTypes = {
  onCardClick: PropTypes.func,
  cards: PropTypes.arrayOf(Object)
};

FeaturedOnSite.defaultProps = {
  onCardClick: () => null,
  cards: [
    {
      image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
      title: 'Title not available',
      text: 'Text not available',
      action: '🚫'
    }
  ]
};
