import { xData } from './data';
export const xAxis = [
	{
		type: 'value',
		name: '人口',
		inverse: true,
		axisLine: {
			show: true
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
	},
	{
		gridIndex: 1,
		show: false
	},
	{
		name: '死亡人数',
		gridIndex: 2,
		axisLine: {
			show: true
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
		position: 'right',
		splitLine: {
			show: false
		},
		axisLine: {
			show: true,
			lineStyle: {}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: false
		},
		data: xData
	},
	{
		gridIndex: 1,
		type: 'category',
		inverse: true,
		position: 'left',
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: false,
			padding: [ 0, 0, 0, 15 ],
			textStyle: {
				color: '#ffffff',
				fontSize: 20
			},
			align: 'center'
		},
		data: xData
	},
	{
		gridIndex: 2,
		type: 'category',
		splitLine: {
			show: false
		},
		inverse: true,
		position: 'left',
		splitLine: {
			show: false
		},
		axisLine: {
			show: true,
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
