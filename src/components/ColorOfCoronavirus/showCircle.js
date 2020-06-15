const renderCircle = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	const style = api.style();
	style.fill = 'rgba(0,0,0,0)';
	return {
		type: 'circle',
		shape: {
			cx: width / 2,
			cy: height / 2,
			r: size / 3
		},
		style: style
	};
};
export const circleSeries = {
	name: '圆',
	type: 'custom',
	silent: true,
	itemStyle: {
		borderColor: '#fff',
		borderWidth: 1
	},
	renderItem: renderCircle,
	data: [ 1 ],
	animationEasing: 'elasticOut'
};
