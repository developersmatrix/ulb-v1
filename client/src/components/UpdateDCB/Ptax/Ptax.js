import { useState } from "react";

import styles from "./Ptax.module.css";

export const Ptax = () => {
  const [disabled, setDisabled] = useState(false);

  const submitHandler = () => {};
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Property Tax </h1>
      <form onSubmit={submitHandler}>
        <div className={styles["form__general--info"]}>
          <input
            className={styles.test}
            label="Total No of properties"
            type="number"
            id="totalnoofproperties"
            // value={noProps}
            // onChange={noPropsHandler}
            // disabled={isDisabled}
          />

          <input
            className={styles.test}
            label="Opening Balance"
            type="number"
            id="openingbalance"
            // value={openingBalance}
            // onChange={openingBalanceHandler}
            // disabled={isDisabled}
          />

          <input
            className={styles.test}
            label="Current year Demand"
            type="number"
            id="currentyearDemand"
            // value={currentYearDemand}
            // onChange={currentYearDemandHandler}
            // disabled={isDisabled}
          />

          <input
            className={styles.test}
            label="Total Demand"
            type="number"
            id="totalDemand"
            // value={totalDemand}
            // onChange={currentYearDemandHandler}
            // disabled={true}
          />
        </div>
        <div className={styles.submit__button}>
          <button type="submit">{disabled ? "Edit" : "Update"}</button>
        </div>
      </form>
    </div>
  );
};
