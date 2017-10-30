import styled from 'styled-components';

export const HoverEffect = styled.div`
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  }
`;

export const styleCardText = {
  fontWeight: 'bold',
  padding: '10px',
  textAlign: 'center'
};

export const styleFlatButton = {
  textAlign: 'center'
};

export const styleCard = {
  height: '100%'
};
