import React from "react";

import classes from "./UpdateDCB.module.css";

export const UpdateDCB = () => {
  return (
    <div>
      <h1>Update Daily Collection Book</h1>
      <form action="">
        <div className={classes["input"]}>
          <label htmlFor="ctype">Collection Type</label>
          <select name="ctype" id="ctype" className={classes.select}>
            <option value="">Select</option>
            <option value="sas">Sas</option>
            <option value="water">water</option>
            <option value="trade">trade</option>
            <option value="ad">Advertisement</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className={classes["input"]}>
          <label htmlFor="year">financial Year</label>
          <select name="year" id="year" className={classes.select}>
            <option value="">Select</option>
            <option value="2022-23">2022-23</option>
            <option value="2021-22">2021-22</option>
            <option value="2020-21">2020-21</option>
          </select>
        </div>
        <div className={classes["input"]}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" className={classes.select}>
            <option value="">Select</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
          </select>
        </div>
        <div>
          <button>Get data</button>
        </div>
      </form>
    </div>
  );
};
