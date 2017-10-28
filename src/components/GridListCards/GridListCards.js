import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import AddLocation from 'material-ui-icons/AddLocation';
import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  grid-area: ${({ gridArea }) => gridArea};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px 15px;
  background-color: #fff;
  padding: 5px;
  border: 1px solid #ddd;
`;

const GridCardFooter = styled.div`
  background-color: rgba(255, 255, 255, 0);
  height: 25%;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease-in;
`;

const GridCardFooterTitle = styled.h3`
  color: rgba(255, 255, 255, 0);
  position: absolute;
  bottom: 10%;
  left: 5%;
  transition: all 0.3s ease-in;
`;

const GridCardFooterSubTitle = styled.span`
  color: rgba(255, 255, 255, 0);
  position: absolute;
  bottom: 10%;
  left: 5%;
  transition: all 0.3s ease-in;
`;

const GridCard = styled.div`
  height: 250px;
  border: 1px solid green;
  background-color: #aaa;
  position: relative;
  background-image: url(${({ background }) => background});
  background-size: cover;
  cursor: pointer;
  &:hover ${GridCardFooter} {
    background-color: rgba(255, 255, 255, 1);
  }
  &:hover ${GridCardFooterTitle} {
    color: rgba(0, 0, 0, 1);
  }
  &:hover ${GridCardFooterSubTitle} {
    color: rgba(0, 0, 0, 1);
  }
`;

const styles = {
  icon: {
    position: 'absolute',
    right: '2%',
    bottom: '5%'
  }
};

const GridListCards = ({ gridArea, items }) => (
  <Grid gridArea={gridArea}>
    {items.map(tile => (
      <GridCard key={tile.location} background={tile.img}>
        <GridCardFooter>
          <GridCardFooterTitle>{tile.location}</GridCardFooterTitle>
          <GridCardFooterSubTitle>
            <b>{tile.address}</b>
          </GridCardFooterSubTitle>
          <IconButton style={styles.icon}>
            <AddLocation color="gold" />
          </IconButton>
        </GridCardFooter>
      </GridCard>
    ))}
  </Grid>
);

GridListCards.propTypes = {
  gridArea: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object)
};

GridListCards.defaultProps = {
  gridArea: 'right',
  items: []
};

export default GridListCards;
