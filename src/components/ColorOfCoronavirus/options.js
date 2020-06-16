import { population, death } from './data';
import { yAxis, xAxis } from './axis';
import { circleSeries } from './showCircle';
import { circleTextSeries } from './showCircleText';
import { circlePinSeries } from './showCirclePin';
import { circlePointSeries } from './showCirclePoint';

export const options = {
	backgroundColor: 'rgb(25,39,66)',
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
