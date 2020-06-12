import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import { options } from "./options";

function ColorOfCoronavirus() {
  const couterRef = useRef();


  useEffect(() => {
    const myChart = echarts.init(couterRef.current);
    myChart.setOption(options)
  })

  return (
    <div ref={couterRef} style={{ width: "500px", height: "500px" }}>
    </div>
  );
}
export default ColorOfCoronavirus;
