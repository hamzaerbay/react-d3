import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';

const colorLegend = [
  // reds from dark to light
  { color: '#3FC1C9', text: 'Negative', textColor: '#F5F5F5' },
  { color: '#C84361', textColor: '#F5F5F5' },
  { color: '#FF395E', text: 'Neutral' },
  '#08519c',
  { color: '#08519c', text: 'Positive', textColor: '#F5F5F5' },
];

const tooltipProps = [
  {
    css: 'symbol',
    prop: '_id',
  },
  {
    css: 'value',
    prop: 'value',
    display: 'Last Value',
  },
  {
    css: 'change',
    prop: 'colorValue',
    display: 'Change',
  },
];

const data = [];

const dataWithChildren = [
  {
    _id: 'root',
    value: Math.random() * 50,
    selected: false,
    colorValue: 2,
    children: [],
  },
];

for (let i = 0; i < 4; i++) {
  dataWithChildren[0].children.push({
    _id: `child${i}`,
    value: Math.random() * 10,
    selected: false,
    colorValue: 2,
  });
}

for (let i = 0; i < 5; i++) {
  data.push({
    _id: `hello${i}`,
    value: 5 - i,
    colorValue: 26,
    selected: false,
    // children: [{
    //     _id: `child${i}`,
    //     value: Math.random()*50,
    //     selected: false,
    //     colorValue: 3
    // }],
  });
}

data[0].selected = true;

export default class BubbleChart extends React.Component {
  onClick() {
    const idx = Math.floor(Math.random() * data.length);
    console.log(idx);
    data[idx].value = Math.random() * 10;
    this.setState(data);
  }

  render() {
    return (
      <div>
        <ReactBubbleChart
          className="my-cool-chart"
          colorLegend={colorLegend}
          data={data}
          selectedColor="#364F6B"
          selectedTextColor="#d9d9d9"
          smallDiameter={10}
          diameter={12}
          mediumDiameter={40}
          fontSizeFactor={0.2}
          fixedDomain={{ min: 0, max: 100 }}
          onClick={this.onClick.bind(this)}
          // legend
          // legendSpacing={0}
          tooltip
          tooltipProps={tooltipProps}
          tooltipFunc={() => {}}
        />
      </div>
    );
  }
}
