import styled from 'styled-components';

export const CardListWrapper = styled.div`
  display: grid;
  width: ${props => props.width || '100%'};
  grid-template-columns: repeat(${props => props.gridColumns || '5'}, 1fr);
  grid-gap: ${props => props.gridGap || '1rem'};
`;

export default CardListWrapper;
