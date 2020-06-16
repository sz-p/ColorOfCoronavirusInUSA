import { cityColorOfCoronavirusData } from './data';
const renderCircleText = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	const style = api.style({
		textAlign: 'center',
		textVerticalAlign: 'middle',
		text: api.value(2),
		fontSize: size * 0.015
	});

	const key = api.value(0) * 2 * Math.PI / api.value(1) - Math.PI / 2;
	const x = Math.cos(key) * size / 4.2 + width / 2;
	const y = Math.sin(key) * size / 4.2 + height / 2;
	let rotation = -api.value(0) / api.value(1) * 2 * Math.PI;
	if (Math.cos(rotation) < 0) {
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
	for (let i = 0; i < cityColorOfCoronavirusData.length; i++) {
		textRenderData.push([ i, cityColorOfCoronavirusData.length, cityColorOfCoronavirusData[i].city ]);
	}
	return textRenderData;
}
export const circleTextSeries = {
	type: 'custom',
	itemStyle: {
		color: '#000'
	},
	renderItem: renderCircleText,
	data: getRenderData()
};
