const data = [
	{
		name: 'Black, African American',
		label: '黑人',
		population: 1849077,
		death: 428
	},
	{
		name: 'White',
		label: '白人',
		death: 424,
		population: 2694258
	},
	{
		name: 'Asian',
		label: '亚裔',
		death: 112,
		population: 1231790
	},
	{
		name: 'Other',
		label: '其他',
		death: 70,
		population: 174173
	}
];
const styleList = [
	{
		itemStyle: {
			normal: {
				color: '#000'
			}
		}
	},
	{
		itemStyle: {
			normal: {
				color: '#fff'
			}
		}
	},
	{
		itemStyle: {
			normal: {
				color: 'rgba(227,161,96,0.8)'
			}
		}
	},
	{
		itemStyle: {
			normal: {
				color: '#ccc'
			}
		}
	}
];
let xData = [];
let population = [];
let death = [];
for (let i = 1; i <= data.length; i++) {
	const index = data.length - i;
	xData.push(data[index].label);
	const style = styleList[index].itemStyle;
	population.push({
		value: data[index].population,
		itemStyle: style
	});
	death.push({
		value: data[index].death,
		itemStyle: style
	});
}
let legendData = [
	{
		name: '黑人',
		icon: 'rect',
		textStyle: {
			color: '#000'
		},
		backgroundColor: '#000'
	},
	{
		name: '白人',
		icon: 'rect',
		textStyle: {
			color: '#fff'
		},
		backgroundColor: '#fff'
	},
	{
		name: '亚裔',
		icon: 'rect',
		textStyle: {
			color: 'rgba(227,161,96,0.8)'
		},
		backgroundColor: 'rgba(227,161,96,0.8)'
	},
	{
		name: '其他',
		icon: 'rect',
		textStyle: {
			color: '#ccc'
		},
		backgroundColor: '#ccc'
	}
];

const ringXData = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'District',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming'
];

export const options = {
	backgroundColor: 'rgb(14,33,71)',
	legend: {
		show: true,
		type: 'plain',
		orient: 'horizontal',
		left: 10,
		top: 10,
		data: legendData
	},
	xAxis: [
		{
			type: 'value',
			name: '人口',
			inverse: true,
			axisLine: {
				show: true
			},
			axisTick: {
				show: true
			},
			position: 'bottom',
			axisLabel: {
				show: true
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
				show: true
			},
			position: 'bottom',
			axisLabel: {
				show: true
			},
			splitLine: {
				show: false,
				lineStyle: {}
			}
		}
	],
	yAxis: [
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
	],
	grid: [
		{
			show: false,
			left: '40%',
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
			right: '30%',
			top: '40%',
			bottom: '40%',
			containLabel: true,
			width: '15%'
		}
	],
	series: [
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
