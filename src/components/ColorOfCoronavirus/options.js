import { legendData, population, death } from './data';
import { yAxis, xAxis } from './axis';
import { circleSeries } from './showCircle';
import { circleTextSeries } from './showCircleText';
import { circlePointSeries } from './showCirclePoint';

export const options = {
	backgroundColor: 'rgb(14,33,71)',
	yAxis,
	xAxis,
	legend: {
		show: true,
		type: 'plain',
		orient: 'horizontal',
		left: 10,
		top: 10,
		data: legendData
	},
	grid: [
		{
			show: false,
			left: '35%',
			top: '40%',
			bottom: '40%',
			containLabel: true,
			width: '15%'
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
			right: '35%',
			top: '40%',
			bottom: '40%',
			containLabel: true,
			width: '15%'
		}
	],
	series: [
		circleSeries,
		circleTextSeries,
		circlePointSeries,
		{
			name: '人口',
			type: 'bar',
			label: {
				normal: {
					show: false
				}
			},
			data: population,
			animationEasing: 'elasticOut'
		},
		{
			name: '死亡率',
			type: 'bar',
			xAxisIndex: 2,
			yAxisIndex: 2,
			label: {
				normal: {
					show: false
				}
			},
			data: death,
			animationEasing: 'elasticOut'
		},
		{
			name: '黑人',
			type: 'bar',
			color: '#000',
			barWidth: 0,
			xAxisIndex: 1,
			yAxisIndex: 1
		},
		{
			name: '白人',
			type: 'bar',
			color: '#fff',
			barWidth: 0,
			xAxisIndex: 1,
			yAxisIndex: 1
		},
		{
			name: '亚裔',
			type: 'bar',
			color: 'rgba(227,161,96,0.8)',
			barWidth: 0,
			xAxisIndex: 1,
			yAxisIndex: 1
		},
		{
			name: '其他',
			type: 'bar',
			color: '#ccc',
			barWidth: 0,
			xAxisIndex: 1,
			yAxisIndex: 1
		}
	]
};
