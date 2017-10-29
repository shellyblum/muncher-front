import React  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemPrice = styled.div`
float: right;
font-weight: bold;
font-family: arial;
margin-top: -22px;
`;

const ItemDescription = styled.div`
font-style: italic;
font-size: 0.9em;
line-height: 1.5em;
`;

const ItemName = styled.div`
font-family: helvetica;
font-weight: bold;
border-bottom: 2px dotted rgb(213, 213, 213);
margin-top: 1em;
`;

const  MenuElementChild = ({name,price,description}) => {
        return (
            <div key = {name}> 
                 <ItemName> {name} </ItemName>
                 <ItemPrice> {price}</ItemPrice>
                  <ItemDescription>
                 {description}
                 </ItemDescription>
             </div>
        );
}

export default MenuElementChild;

MenuElementChild.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

MenuElementChild.defaultProps = {
    name:'name',
    price:'price',
    description:'description'
}