import { dataTotal } from './data';

const renderCirclePoint = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	let fill = undefined;
	let stroke = undefined;
	let cx = undefined;
	let cy = undefined;
	let r = undefined;
	let z = undefined;
	let populationBaseR = 50;
	let deathBaseR = 20;

	if (api.value(2) === 'Black') stroke = '#000';
	if (api.value(2) === 'White') stroke = '#fff';

	if (api.value(2) === 'Black' && api.value(3) === 'population') {
		fill = 'rgba(0,0,0,0.5)';
		cx = width / 2 + size * 0.1;
		cy = height / 2 + size * 0.1;
		r = api.value(1) / api.value(4) * populationBaseR;
		z = 1;
	}
	if (api.value(2) === 'Black' && api.value(3) === 'death') {
		fill = 'rgba(0,0,0,1)';
		cx = width / 2 + size * 0.11;
		cy = height / 2 + size * 0.1;
		r = api.value(1) / api.value(5) * deathBaseR;
		z = 3;
	}
	if (api.value(2) === 'White' && api.value(3) === 'population') {
		fill = 'rgba(255,255,255,0.5)';
		cx = width / 2 - size * 0.09;
		cy = height / 2 - size * 0.09;
		r = api.value(1) / api.value(4) * populationBaseR;
		z = 1;
	}
	if (api.value(2) === 'White' && api.value(3) === 'death') {
		fill = 'rgba(255,255,255,1)';
		cx = width / 2 - size * 0.08;
		cy = height / 2 - size * 0.08;
		r = api.value(1) / api.value(5) * deathBaseR;
		z = 3;
	}

	const style = api.style({
		fill,
		stroke
	});
	return {
		type: 'circle',
		shape: {
			cx,
			cy,
			r,
			z
		},
		style: style
	};
};
function getRenderData() {
	const textRenderData = [];
	for (let i = 0; i < dataTotal.length; i++) {
		textRenderData.push([ i, dataTotal[i].value, dataTotal[i].name, dataTotal[i].type, 2694258, 4280 ]);
	}
	return textRenderData;
}
export const circlePointSeries = {
	name: 'circlePointSeries',
	type: 'custom',
	itemStyle: {
		borderWidth: 1
	},
	renderItem: renderCirclePoint,
	data: getRenderData()
};
