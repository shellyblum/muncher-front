import 'antd/lib/card/style/css';
import 'antd/lib/pagination/style/css';
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Pagination } from 'antd';
import LocationCard from '../LocationCard/LocationCard';
import './Grid.css';

const comapre = (arrA, arrB) => {
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i += 1) {
    if (arrA.id !== arrB.id) {
      return false;
    }
  }
  return true;
};
class GridCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [], currData: [], pageNum: 1 };
    this.updateData = this.updateData.bind(this);
  }
  componentWillMount() {
    this.updateCards();
  }
  componentWillReceiveProps(nextProps) {
    const { filteredCards } = this.props;
    if (!comapre(nextProps.filteredCards, filteredCards)) {
      this.setState({ pageNum: 1 });
      this.updateCards(nextProps.filteredCards);
    }
  }

  updateCards(nextFilt) {
    const { filteredCards, toggleCTADialog, redirectToLocation, onCardClick, updateShownCards } = this.props;
    const { itemsPerPage } = this.props;
    const filt = nextFilt || filteredCards;

    const data = filt.map(tile => (
      <Card.Grid
        key={tile.title}
        style={{ width: '30%', textAlign: 'center', padding: '0px', margin: '0 5px 10px 5px' }}
      >
        <LocationCard
          id={tile.id}
          key={tile.title}
          {...tile}
          toggleCTADialog={toggleCTADialog}
          redirectToLocation={redirectToLocation}
          onCardClick={onCardClick}
        />
      </Card.Grid>
    ));
    const currData = data.slice(0, itemsPerPage);
    this.setState({ data, currData });

    const dataToShow = filt.slice(0, itemsPerPage);
    updateShownCards(dataToShow);
  }

  updateData(page, pageSize) {
    const { filteredCards, updateShownCards } = this.props;
    let { pageNum } = this.state;
    pageNum += 1;
    let startIndex = page - 1;
    startIndex *= pageSize;
    const currData = this.state.data.slice(startIndex, startIndex + pageSize);
    this.setState({ currData, pageNum });

    const dataToShow = filteredCards.slice(startIndex, startIndex + pageSize);
    updateShownCards(dataToShow);
  }

  render() {
    const { currData, pageNum } = this.state;
    const { itemsPerPage, filteredCards } = this.props;
    return (
      <Card
        id="cardWrapper"
        style={{
          scrollBehavior: 'smooth',
          height: 'calc(100vh - 112px)',
          overflowY: 'scroll'
        }}
        bordered={false}
        noHovering
      >
        <div>{currData}</div>
        <Pagination
          defaultCurrent={1}
          current={pageNum}
          pageSize={itemsPerPage}
          total={filteredCards.length}
          onChange={this.updateData}
        />
      </Card>
    );
  }
}

GridCards.propTypes = {
  toggleCTADialog: PropTypes.func,
  redirectToLocation: PropTypes.func,
  onCardClick: PropTypes.func,
  updateShownCards: PropTypes.func,
  itemsPerPage: PropTypes.number,
  filteredCards: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.string,
    city: PropTypes.string,
    orderType: PropTypes.arrayOf(PropTypes.string),
    lng: PropTypes.number,
    lat: PropTypes.number
  })).isRequired
};

GridCards.defaultProps = {
  toggleCTADialog: () => null,
  redirectToLocation: () => null,
  onCardClick: () => null,
  updateShownCards: () => null,
  itemsPerPage: () => null
};

export default GridCards;
