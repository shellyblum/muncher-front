import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from './Image';

const MainImage = styled.img`
  width:100%;
`;

const ImageWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  `;

const ListWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding : 1rem 0 0 0;
  `;

class ImageShow extends Component {
  state = { mainImage: this.props.data[0] };

  handleOnClick = (e) => {
    this.setState({ mainImage: { image: e.target.src, alt: e.target.alt } });
  }

  render() {
    const Images = this.props.data.map((image) => <Image key={image.image} data={image} click={this.handleOnClick} />);
    return (
      <ImageWrapper>
        <div>
          <MainImage src={this.state.mainImage.image} alt={this.state.mainImage.alt} />
          <ListWrapper>
            {Images}
          </ListWrapper>
        </div>
      </ImageWrapper>
    );
  }
}

ImageShow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
    discription: PropTypes.string
  })).isRequired };

export default ImageShow;
