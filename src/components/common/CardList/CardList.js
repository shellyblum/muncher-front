import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CardListWrapper } from './CardList.styles';

import CardWithImage from '../Card/Card';

export default class CardList extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  renderCard() {
    const { cards } = this.props;
    return cards.map(card => <CardWithImage key={card.title} {...card} />);
  }

  render() {
    return (
      <div>
        <h1>{this.props.listTitle}</h1>
        <CardListWrapper {...this.props}>{this.renderCard()}</CardListWrapper>
      </div>
    );
  }
}

CardList.propTypes = {
  gridRows: PropTypes.number,
  listTitle: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object)
};

CardList.defaultProps = {
  gridRows: 4,
  listTitle: 'Title unavailable',
  cards: [{}]
};
