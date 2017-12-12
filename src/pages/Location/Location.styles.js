import styled from 'styled-components';

export const Main = styled.div`
  background-color: #fbfbfb;
  padding: 0 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'header header header'
    'left right right'
    'bottomLeft bottomRight bottomRight'
    'bottomLeft bottomRight bottomRight';
`;

export const Header = styled.div`
  border: 1px solid black;
  height: 50px;
  margin-bottom: 5px;
  grid-area: ${({ gridArea }) => gridArea};
`;

export const Right = styled.div`
  border: 1px solid grey;
  grid-area: ${({ gridArea }) => gridArea};
`;

export const Left = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
`;

export const BottomLeft = styled.div`
  min-height: 200px;
  grid-area: ${({ gridArea }) => gridArea};
`;

export const BottomRight = styled.div`
  border: 1px solid grey;
  min-height: 200px;
  grid-area: ${({ gridArea }) => gridArea};
`;
