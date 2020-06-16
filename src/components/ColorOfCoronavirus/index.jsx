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
    <div ref={couterRef} style={{ width: "900px", height: "900px" }}>
    </div>
  );
}
export default ColorOfCoronavirus;
