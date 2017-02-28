import React, { Component } from "react";
import ReactHighcharts from "react-highcharts";

// highcharts config 

const config = {
    chart: {
        },
    title: {
        text: "Last 5 Comments ratings",
    },
    xAxis: {
        type: "datetime",
    },
    yAxis: {
            plotLines: [{
                value: 0,
                width: 1,
                color: "#808080",
            }],
        },  
    series: [{
        }],
};

class Graph extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let chart = this.refs.chart.getChart();
        chart.series[0].name = "Checkout comments";
        chart.series[0].setData([{ x: (new Date).getTime()*1000, y: this.props.Rating }]);
    }

    render() {
        return <ReactHighcharts config={config} ref="chart">
        </ReactHighcharts>;
    }
}

export default Graph;

