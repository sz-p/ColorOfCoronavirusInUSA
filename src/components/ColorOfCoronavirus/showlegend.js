const renderLegend = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);

	return {
		type: 'group',
		silent: true,
		children: [
			{
				type: 'group',
				children: [
					{
						type: 'circle',
						shape: {
							cx: 50,
							cy: 50,
							r: 10
						},
						style: api.style({
							fill: '#fff',
							stroke: '#fff'
						})
					},
					{
						type: 'line',
						shape: {
							x1: 50,
							y1: 50,
							x2: 50,
							y2: 100
						},
						style: api.style({
							fill: '#fff',
							stroke: '#fff'
						})
					}
				]
			},
			{
				type: 'group',
				children: [
					{
						type: 'circle',
						shape: {
							cx: 80,
							cy: 50,
							r: 10
						},
						style: api.style({
							fill: '#000',
							stroke: '#000'
						})
					},
					{
						type: 'line',
						shape: {
							x1: 80,
							y1: 50,
							x2: 80,
							y2: 100
						},
						style: api.style({
							fill: '#000',
							stroke: '#000'
						})
					}
				]
			},
			{
				type: 'text',
				silent: true,
				position: [ 100, 75 ],
				style: api.style({
					textVerticalAlign: 'middle',
					text: '按种族/民族划分的每10万人死亡人数',
					fontSize: size * 0.015
				})
			}
		]
	};
};

export const legendSeries = {
	type: 'custom',
	itemStyle: {
		color: '#000',
		borderColor: '#fff',
		borderWidth: 1
	},
	renderItem: renderLegend,
	data: [ 1 ]
};
