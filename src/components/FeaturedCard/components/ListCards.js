import React from 'react';
import { Timeline, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { Wrapper, Image, MapBtn } from './ListCards.styled';

const ListCards = ({ cards, onCardClick }) => (
  <Timeline pending={<a href="">See more</a>}>
    {cards.map(card => (
      <Timeline.Item key={card.id}>
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

export default ListCards;

ListCards.propTypes = {
  onCardClick: PropTypes.func,
  cards: PropTypes.arrayOf(Object)
};

ListCards.defaultProps = {
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
