import { population, death } from './data';
import { yAxis, xAxis } from './axis';
import { circleSeries } from './showCircle';
import { circleTextSeries } from './showCircleText';
import { circlePinSeries } from './showCirclePin';
import { circlePointSeries } from './showCirclePoint';
import { legendSeries } from './showlegend';
export const options = {
	title: {
		text: '  黑与白  \n  生与死  \n自由与民主',
		textStyle: {
			color: '#fff',
			textAlign: 'center'
		},
		left: 'center',
		top: '2%',
		subtext: `数据来源APM实验室`
	},
	backgroundColor: 'rgb(55,55,55)',
	yAxis,
	xAxis,
	grid: [
		{
			show: false,
			left: '40%',
			top: '40%',
			bottom: '40%',
			containLabel: true,
			width: '10%'
		},
		{
			show: false,
			left: '50%',
			top: '40%',
			bottom: '40%',
			width: '0%'
		},
		{
			show: false,
			right: '40%',
			top: '40%',
			bottom: '40%',
			containLabel: true,
			width: '10%'
		}
	],
	tooltip: {
		show: true,
		trigger: 'item',
		formatter: function(v) {
			if (typeof v.data[2] === 'string') {
				return '';
			}
			return v.data[2];
		}
	},
	series: [
		circleSeries,
		circleTextSeries,
		circlePinSeries,
		legendSeries,
		// circlePointSeries
		{
			name: '人口',
			type: 'bar',
			label: {
				normal: {
					show: false
				}
			},
			tooltip: {
				show: true,
				formatter: function(v) {
					return v.data.value;
				}
			},
			barWidth: '20%',
			data: population,
			animationEasing: 'elasticOut'
		},
		{
			name: '死亡率',
			type: 'bar',
			xAxisIndex: 2,
			yAxisIndex: 2,
			barWidth: '20%',
			label: {
				normal: {
					show: false
				}
			},
			tooltip: {
				show: true,
				formatter: function(v) {
					return v.data.value;
				}
			},
			data: death,
			animationEasing: 'elasticOut'
		}
	]
};
