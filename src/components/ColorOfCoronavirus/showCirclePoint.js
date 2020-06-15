import { ringXData } from './data';
const renderCirclePoint = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	const LineLength = 1;
	const style = api.style({});

	const key = (api.value(0) - 0.5) * 2 * Math.PI / api.value(1);
	const cx = Math.cos(key) * (size + LineLength * api.value(2)) / 3 + width / 2;
	const cy = Math.sin(key) * (size + LineLength * api.value(2)) / 3 + height / 2;
	const x = Math.cos(key) * size / 3 + width / 2;
	const y = Math.sin(key) * size / 3 + height / 2;
	let rotation = -api.value(0) / api.value(1) * 2 * Math.PI + Math.PI / 2;
	if (rotation < 0) {
		rotation = rotation + Math.PI;
	}
	return {
		type: 'group',
		silent: true,
		children: [
			{
				type: 'circle',
				shape: {
					cx,
					cy,
					r: size / 300
				},
				style: style
			},
			{
				type: 'line',
				shape: {
					x1: x,
					y1: y,
					x2: cx,
					y2: cy,
					r: size / 30
				},
				style: style
			}
		],
		style: style
	};
};
function getRenderData() {
	const textRenderData = [];
	for (let i = 0; i < ringXData.length * 2; i++) {
		textRenderData.push([ i, ringXData.length * 2, parseInt(Math.random() * 100) ]);
	}
	return textRenderData;
}
export const circlePointSeries = {
	type: 'custom',
	itemStyle: {
		borderColor: '#fff',
		borderWidth: 1
	},
	renderItem: renderCirclePoint,
	data: getRenderData()
};
