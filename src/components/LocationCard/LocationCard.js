import 'antd/lib/tooltip/style/css';
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

import {
  SelectEffect,
  Paragraph,
  BtnsWrapper,
  CallToActionBtn,
  MapBtn
} from '../LocationCard/LocationCard.styled';

const LocationCard = ({
  id,
  imageUrl,
  name,
  generalDesc,
  action,
  selected,
  toggleCTADialog,
  onCardClick
}) => (
  <SelectEffect style={{ background: selected }} selected={selected}>
    <h3>{name}</h3>
    <img alt={name} width="100%" src={imageUrl} />
    <Paragraph>{generalDesc}</Paragraph>
    <BtnsWrapper>
      <CallToActionBtn onClick={() => toggleCTADialog(id)}>
        <h3>{action}</h3>
      </CallToActionBtn>
      <MapBtn key={id} id={id} onClick={() => onCardClick(id)}>
        <Tooltip name="Show on map">
          <i className="fa fa-map-marker" aria-hidden="true" />
        </Tooltip>
      </MapBtn>
    </BtnsWrapper>
  </SelectEffect>
);

LocationCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  generalDesc: PropTypes.string,
  action: PropTypes.string,
  selected: PropTypes.string,
  toggleCTADialog: PropTypes.func,
  onCardClick: PropTypes.func
};

LocationCard.defaultProps = {
  imageUrl: 'https://www.equalserving.com/images/es1scplugin/imageUrl-not-available.png',
  name: 'Title unavailable',
  generalDesc: 'Text unavailable',
  action: 'Action button',
  selected: null,
  toggleCTADialog: () => null,
  onCardClick: () => null
};

export default LocationCard;
