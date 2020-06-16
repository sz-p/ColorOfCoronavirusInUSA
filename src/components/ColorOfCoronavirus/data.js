export const data = [
	{
		name: 'Black, African American',
		label: '黑人',
		population: 1849077,
		death: 4280
	},
	{
		name: 'White',
		label: '白人',
		death: 4240,
		population: 2694258
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
export let xData = [];
export let population = [];
export let death = [];
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
export const dataTotal = [
	{
		name: 'Black',
		value: 1849077,
		type: 'population'
	},
	{
		name: 'White',
		value: 2694258,
		type: 'population'
	},
	{
		name: 'Black',
		value: 4280,
		type: 'death'
	},
	{
		name: 'White',
		value: 4240,
		type: 'death'
	}
];
export let legendData = [
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
export const cityColorOfCoronavirusData = [
	{
		city: '纽约',
		white: 84.3,
		black: 259.9
	},
	{
		city: '康涅狄格',
		white: 125.8,
		black: 171.9
	},
	{
		city: '密歇根',
		white: 39.0,
		black: 171.6
	},
	{
		city: '新泽西州',
		white: 98.0,
		black: 168.0
	},
	{
		city: '马萨诸塞州',
		white: 111.2,
		black: 127.2
	},
	{
		city: '哥伦比亚特区',
		white: 20.8,
		black: 117.8
	},
	{
		city: '路易斯安那州',
		white: 43.4,
		black: 100.2
	},
	{
		city: '伊利诺斯',
		white: 33.9,
		black: 98.2
	},
	{
		city: '宾夕法尼亚',
		white: 41.4,
		black: 85.1
	},
	{
		city: '马里兰',
		white: 39.7,
		black: 65.0
	},
	{
		city: '罗德岛州',
		white: 74.3,
		black: 64.8
	},
	{
		city: '印第安纳州',
		white: 25.2,
		black: 51.5
	},
	{
		city: '特拉华州',
		white: 41.8,
		black: 50.7
	},
	{
		city: '科罗拉多州',
		white: 25.1,
		black: 47.5
	},
	{
		city: '威斯康星州',
		white: 9.1,
		black: 44.2
	},
	{
		city: '密苏里州',
		white: 9.7,
		black: 41.6
	}
];
