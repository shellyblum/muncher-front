import styled from 'styled-components';

export const Main = styled.div`
  background-color: #fbfbfb;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'search search search' 'left right right'
    'bottomLeft right right' '. right right';
`;

export const Search = styled.div`
  border: 1px solid black;
  height: 50px;
  margin-bottom: 5px;
  grid-area: ${({ gridArea }) => gridArea};
`;

export const Right = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
`;

export const Left = styled.div`
  height: 450px;
  margin-bottom: 5px;
  margin-right: 5px;
  grid-area: ${({ gridArea }) => gridArea};
`;

export const BottomLeft = styled.div`
  border: 1px solid green;
  margin-right: 5px;
  grid-area: ${({ gridArea }) => gridArea};
  height: 250px;
`;
