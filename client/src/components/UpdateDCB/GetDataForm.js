import { useState, useRef } from "react";

import classes from "./GetDataForm.module.css";

export const GetDataForm = () => {
  const [collectionType, setCollectionType] = useState("");
  const [financialYear, setFinancialYear] = useState("");

  const ctypeRef = useRef(null);

  const getDataHanler = (event) => {
    event.preventDefault();
    const date = new Date().getMonth();
    console.log(date);
    console.log(ctypeRef.current.value);
  };

  return (
    <form onSubmit={getDataHanler}>
      <div className={classes["container"]}>
        <div className={classes["input"]}>
          <label htmlFor="ctype">Collection Type</label>
          <select
            name="ctype"
            ref={ctypeRef}
            id="ctype"
            className={classes.select}
          >
            {/* <option value="">Select</option> */}
            <option value="sas">Property Tax</option>
            <option value="water">Water Tax</option>
            <option value="rent">Lease & Rent</option>
            <option value="ad">Advertisement</option>
            <option value="trade">Trade Liecence</option>
          </select>
        </div>
        <div className={classes["input"]}>
          <label htmlFor="year">Financial Year</label>
          <select name="year" id="year" className={classes.select}>
            {/* <option value="">Select</option> */}
            <option value="2022-23">2022-23</option>
            <option value="2021-22">2021-22</option>
            <option value="2020-21">2020-21</option>
          </select>
        </div>

        <div>
          <button className={classes["button"]}>Get Data</button>
        </div>
      </div>
    </form>
  );
};
