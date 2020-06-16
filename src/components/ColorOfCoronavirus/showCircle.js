const renderCircle = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	const style = api.style();
	style.fill = 'rgba(68,81,104,0.1)';
	return {
		type: 'circle',
		shape: {
			cx: width / 2,
			cy: height / 2,
			r: size / 4
		},
		style: style
	};
};
export const circleSeries = {
	name: '圆',
	type: 'custom',
	silent: true,
	itemStyle: {
		borderColor: 'rgb(68,81,104)',
		borderWidth: 1
	},
	renderItem: renderCircle,
	data: [ 1 ]
};
