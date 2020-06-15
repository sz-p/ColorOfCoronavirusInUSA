import { ringXData } from './data';
const renderCircleText = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	const style = api.style({
		textAlign: 'center',
		textVerticalAlign: 'middle',
		text: api.value(2),
		fontSize: size * 0.02
	});

	const key = api.value(0) * 2 * Math.PI / api.value(1);
	const x = Math.cos(key) * size / 3.2 + width / 2;
	const y = Math.sin(key) * size / 3.2 + height / 2;
	let rotation = -api.value(0) / api.value(1) * 2 * Math.PI + Math.PI / 2;
	if (rotation < -1.5) {
		rotation = rotation + Math.PI;
	}
	return {
		type: 'text',
		silent: true,
		rotation,
		position: [ x, y ],
		style: style
	};
};
function getRenderData() {
	const textRenderData = [];
	for (let i = 0; i < ringXData.length; i++) {
		textRenderData.push([ i, ringXData.length, ringXData[i] ]);
	}
	return textRenderData;
}
export const circleTextSeries = {
	type: 'custom',
	itemStyle: {
		borderColor: '#fff',
		borderWidth: 1
	},
	renderItem: renderCircleText,
	data: getRenderData()
};
