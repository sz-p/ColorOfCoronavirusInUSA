import React, { useState } from 'react';
import styles from "./index.scss";
import { Link } from 'react-router-dom';
import ColorOfCoronavirus from "../../components/ColorOfCoronavirus/index";


function IndexPage() {
  // const [count, setCount] = useState(0);
  return (
    <div className={styles.page}>
      <div className={styles.helloword}>
        <ColorOfCoronavirus />
      </div>
    </div>
  );
}
export default IndexPage;
