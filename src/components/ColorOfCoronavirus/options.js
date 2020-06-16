import { population, death } from './data';
import { yAxis, xAxis } from './axis';
import { circleSeries } from './showCircle';
import { circleTextSeries } from './showCircleText';
import { circlePinSeries } from './showCirclePoint';

export const options = {
	backgroundColor: 'rgb(25,39,66)',
	yAxis,
	xAxis,
	// grid: [
	// 	{
	// 		show: false,
	// 		left: '35%',
	// 		top: '40%',
	// 		bottom: '40%',
	// 		containLabel: true,
	// 		width: '15%'
	// 	},
	// 	{
	// 		show: false,
	// 		left: '50%',
	// 		top: '40%',
	// 		bottom: '40%',
	// 		width: '0%'
	// 	},
	// 	{
	// 		show: false,
	// 		right: '35%',
	// 		top: '40%',
	// 		bottom: '40%',
	// 		containLabel: true,
	// 		width: '15%'
	// 	}
	// ],
	tooltip: {
		show: true,
		trigger: 'item',
		formatter: function(v) {
			return v.data[2];
		}
	},
	series: [
		circleSeries,
		circleTextSeries,
		circlePinSeries
		// {
		// 	name: '人口',
		// 	type: 'bar',
		// 	label: {
		// 		normal: {
		// 			show: false
		// 		}
		// 	},
		// 	data: population,
		// 	animationEasing: 'elasticOut'
		// },
		// {
		// 	name: '死亡率',
		// 	type: 'bar',
		// 	xAxisIndex: 2,
		// 	yAxisIndex: 2,
		// 	label: {
		// 		normal: {
		// 			show: false
		// 		}
		// 	},
		// 	data: death,
		// 	animationEasing: 'elasticOut'
		// },
		// {
		// 	name: '黑人',
		// 	type: 'bar',
		// 	color: '#000',
		// 	barWidth: 0,
		// 	xAxisIndex: 1,
		// 	yAxisIndex: 1
		// }
	]
};
