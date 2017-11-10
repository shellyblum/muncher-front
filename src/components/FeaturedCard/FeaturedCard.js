import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import { dataForWidget } from './data';

const FeaturedCard = () => (
  <Tabs>
    {dataForWidget.map(item => (
      <Tab
        key={item.label}
        icon={<FontIcon className={item.name} />}
        label={item.label}
      >
        {item.component}
      </Tab>
    ))}
  </Tabs>
);

export default FeaturedCard;
