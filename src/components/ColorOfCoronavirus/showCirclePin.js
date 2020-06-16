import { cityColorOfCoronavirusData } from './data';
const renderCirclePin = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	const rangeLineLength = size * 0.3;
	const baseLineLength = size * 0.1;
	const baseR = size * 0.005;
	const rangeR = size * 0.01;
	const style = api.style({
		fill: api.value(0) % 2 === 0 ? '#000' : '#fff',
		stroke: api.value(0) % 2 === 0 ? '#000' : '#fff'
	});
	const index = api.value(0);
	const dataLength = api.value(1);
	const value = api.value(2);
	const maxValue = api.value(3);
	const k = value / maxValue;

	const key = (index - 0.5) * 2 * Math.PI / dataLength - Math.PI / 2;
	const cx = Math.cos(key) * (size + baseLineLength + rangeLineLength * k) / 4 + width / 2;
	const cy = Math.sin(key) * (size + baseLineLength + rangeLineLength * k) / 4 + height / 2;
	const x = Math.cos(key) * size / 4 + width / 2;
	const y = Math.sin(key) * size / 4 + height / 2;
	return {
		type: 'group',
		children: [
			{
				silent: true,
				type: 'line',
				shape: {
					x1: x,
					y1: y,
					x2: cx,
					y2: cy
				},
				style: style
			},
			{
				type: 'circle',
				shape: {
					cx,
					cy,
					r: baseR + rangeR * k
				},
				style: style
			}
		],
		style: style
	};
};
function getRenderData() {
	const textRenderData = [];
	for (let i = 0; i < cityColorOfCoronavirusData.length; i++) {
		textRenderData.push([
			2 * i,
			cityColorOfCoronavirusData.length * 2,
			cityColorOfCoronavirusData[i].black,
			cityColorOfCoronavirusData[0].black
		]);
		textRenderData.push([
			2 * i + 1,
			cityColorOfCoronavirusData.length * 2,
			cityColorOfCoronavirusData[i].white,
			cityColorOfCoronavirusData[0].black
		]);
	}
	return textRenderData;
}
export const circlePinSeries = {
	type: 'custom',
	itemStyle: {
		borderColor: '#fff',
		borderWidth: 1
	},
	renderItem: renderCirclePin,
	data: getRenderData()
};
