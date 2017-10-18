import React            from 'react';
import ReactBubbleChart from 'react-bubble-chart';

var colorLegend = [
  //reds from dark to light
  {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
  //neutral grey
  {color: "#f0f0f0", text: 'Neutral'},
  // blues from light to dark
  "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
];

var tooltipProps = [{
  css: 'symbol',
  prop: '_id'
}, {
  css: 'value',
  prop: 'value',
  display: 'Last Value'
}, {
  css: 'change',
  prop: 'colorValue',
  display: 'Change'
}];

function onClick() {
    console.log('clicked');
}


let data = [];

let dataWithChildren = [
{
    _id: 'root',
    value: Math.random()*100,
    selected: false,
    colorValue: 3,
    children:[],
}
];

for (let i=0 ; i < 10 ; i++) {
    dataWithChildren[0].children.push({
        _id: `child${i}`,
        value: Math.random()*100,
        selected: false,
        colorValue: 8
    });
}

for (let i=0 ; i < 30 ; i++) {
    data.push(
{
    _id: `hello${i}`,
    value: 30 - i,
    colorValue: 4,
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
    constructor(props) {
        super(props);
    }

    onClick() {
        const idx = Math.floor(Math.random() * data.length);
        console.log(idx);
        data[idx].value = Math.random()*1000;
        this.setState(data);
    }

  render () {
    return <ReactBubbleChart
      className="my-cool-chart"
      colorLegend={colorLegend}
      data={data}
      selectedColor="#737373"
      selectedTextColor="#d9d9d9"
      fixedDomain={{min: 0, max: 100}}
      onClick={this.onClick.bind(this)}
      legend={true}
      legendSpacing={0}
      tooltip={true}
      tooltipProps={tooltipProps}
      tooltipFunc={ () => {} }
    />;
  }
}
