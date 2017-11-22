import styled from 'styled-components';

export const SelectEffect = styled.div`
  background-color: ${props => props.selected};
  padding: 5px 7px 0px 7px;
`;

export const P = styled.div`
  font-size: 1.1em;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
`;

export const CallToActionBtn = styled.button`
  background: none;
  border: none;
  font-size: 1em;
  cursor: pointer;
  text-align: center;

  order: 0;
  flex: 2 1 auto;
  align-self: auto;
`;

export const MapBtn = styled.button`
  background: none;
  border: none;
  font-size: 3em;
  color: #e29a91;
  cursor: pointer;

  order: 0;
  flex: 1 1 auto;
  align-self: auto;
`;
