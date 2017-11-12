import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from './Image';

const MainImage = styled.img`
width:100%;
`;
const ImageWrapper = styled.div`
border: 1px solid black;
width: 100%;
box-sizing: border-box;
`;
const ListWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 1rem;
padding : 1rem;
`;

class ImageShow extends Component {
  constructor(props) {
    super(props);
    this.state = { mainImage: this.props.data[0] };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(e) {
    this.setState({ mainImage: { image: e.target.src, alt: e.target.alt } });
  }
  render() {
    const Images = this.props.data.map((image, index) => <Image key={index} data={image} click={this.handleOnClick} />);
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
export default ImageShow;
ImageShow.propTypes = {
  data: PropTypes.arrayOf(Object)
};
