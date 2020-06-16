import { xData } from './data';
export const xAxis = [
	{
		type: 'value',
		name: 'xAxis',
		inverse: false,
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		position: 'bottom',
		axisLabel: {
			show: false
		},
		splitLine: {
			show: false,
			lineStyle: {}
		}
	}
];
export const yAxis = [
	{
		type: 'category',
		inverse: true,
		splitLine: {
			show: false
		},
		axisLine: {
			show: false,
			lineStyle: {}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: false
		},
		data: xData
	}
];
