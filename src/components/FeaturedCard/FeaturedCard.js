import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const dataForWidget = [
  {
    label: 'Coffee',
    name: 'fa fa-coffee',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo adipisci obcaecati, sequi pariatur animi repudiandae excepturi ratione sunt neque et, soluta cum sint repellat voluptates, libero quisquam quod expedita eius.'
  },
  {
    label: 'Payment',
    name: 'fa fa-btc',
    text:
      'Lorem ipsum dolor sit amet consectit. Quo adipisci obcaecati, sequi pariatur animi repudiandae excepturi ratione sunt neque et, soluta cum sint repellat voluptates, libero quisquam quod expedita eius.'
  },
  {
    label: 'Shopping basket',
    name: 'fa fa-shopping-bag',
    text:
      'Lorem ipsum dolor sit amet consectetur adi adipisci obcaecati, sequi pariatur animi repudiandae excepturi ratione sunt neque et, soluta cum sint repellat voluptates, libero quisquam quod expedita eius.'
  }
];

const TabsExampleIconText = () => (
  <Tabs>
    {dataForWidget.map(item => (
      <Tab
        key={item.label}
        icon={<FontIcon className={item.name} />}
        label={item.label}
      >
        {item.text}
      </Tab>
    ))}
  </Tabs>
);

export default TabsExampleIconText;
