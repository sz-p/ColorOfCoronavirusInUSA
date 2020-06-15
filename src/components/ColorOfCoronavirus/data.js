export const data = [
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

export const ringXData = [
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
	'Iowa'
];
