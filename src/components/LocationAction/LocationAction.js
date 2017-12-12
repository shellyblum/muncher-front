import React from 'react';
import PropTypes from 'prop-types';
import 'antd/lib/card/style/css';
import { Tabs, Button } from 'antd';
import { Icon } from 'react-fa';
import LocationCard from '../LocationCard/LocationCard';
import ListCards from './components/ListCards';
import Menu from '../../components/Menu/Menu';
import { Wrapper, Span } from './LocationAction.styled';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const LocationAction = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Call Now" key="1">
      <Button
        type="primary"
        shape="circle"
        icon="phone"
        size="large"
        onClick={() => console.log('Calling')}
      />
    </TabPane>
    <TabPane tab="Book a seat" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Menu" key="3">
      <Menu grid="2fr" />
    </TabPane>
  </Tabs>
);

export default LocationAction;

// const FeaturedCard = ({ special, cards, toggleCTADialog, onCardClick }) => {
//   const FeaturedCards = cards.filter((item, index) => index < 3);
//   const FreshOnSiteCards = cards.filter((item, index) => index > 3 && index < 6);
//   return (
//     <Tabs
//       tabBarStyle={{ paddingTop: '20px', height: '100%' }}
//       defaultActiveKey="2"
//       tabPosition="left"
//     >
//       <TabPane
//         tab={
//           <Span>
//             <Icon name="star" className="fa-star" /> Special
//           </Span>
//         }
//         key="1"
//       >
//         <Wrapper>
//           <LocationCard
//             id={special.id}
//             key={special.title}
//             {...special}
//             toggleCTADialog={toggleCTADialog}
//             onCardClick={onCardClick}
//           />
//         </Wrapper>
//       </TabPane>
//       <TabPane
//         tab={
//           <span>
//             <Icon name="bolt" className="fa-bolt" /> Featured list
//           </span>
//         }
//         key="2"
//       >
//         <Wrapper>
//           <ListCards onCardClick={onCardClick} cards={FeaturedCards} />
//         </Wrapper>
//       </TabPane>
//       <TabPane
//         tab={
//           <span>
//             <Icon name="money" className="fa-money" /> Fresh on site
//           </span>
//         }
//         key="3"
//       >
//         <Wrapper>
//           <ListCards onCardClick={onCardClick} cards={FreshOnSiteCards} />
//         </Wrapper>
//       </TabPane>
//     </Tabs>
//   );
// };

// export default FeaturedCard;

// FeaturedCard.propTypes = {
//   toggleCTADialog: PropTypes.func,
//   onCardClick: PropTypes.func,
//   cards: PropTypes.arrayOf(PropTypes.shape({
//     image: PropTypes.string,
//     title: PropTypes.string,
//     text: PropTypes.string,
//     action: PropTypes.string,
//     city: PropTypes.string,
//     orderType: PropTypes.arrayOf(PropTypes.string),
//     lng: PropTypes.number,
//     lat: PropTypes.number
//   })).isRequired,
//   special: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     image: PropTypes.string,
//     title: PropTypes.string,
//     text: PropTypes.string,
//     action: PropTypes.string,
//     city: PropTypes.string,
//     orderType: PropTypes.arrayOf(PropTypes.string),
//     lng: PropTypes.number,
//     lat: PropTypes.number
//   })
// };

// FeaturedCard.defaultProps = {
//   toggleCTADialog: () => null,
//   onCardClick: () => null,
//   special: {
//     id: '1',
//     image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
//     title: 'Title unavailable',
//     text: 'Text unavailable',
//     city: 'tel Aviv',
//     action: 'Action button',
//     selected: null,
//     lng: 30,
//     lat: 34
//   }
// };
