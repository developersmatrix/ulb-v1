import React, { useState } from "react";

import Input from "../../UI/Input/Input";

import styles from "./GeneralInfo.module.css";

const GeneralInfo = (props) => {
  const [noProps, setNoProps] = useState(props.data.totalNumberOfProperty);
  const [openingBalance, setOpeningBalance] = useState(
    props.data.openingBalance
  );

  const [currentYearDemand, setCurrentYearDemand] = useState(
    props.data.currentYearDemand
  );
  const [totalDemand, setTotalDemand] = useState(
    +openingBalance + +currentYearDemand
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const noPropsHandler = (event) => {
    setNoProps(event.target.value);
  };

  const openingBalanceHandler = (event) => {
    setOpeningBalance(event.target.value);
    setTotalDemand(Number(event.target.value) + Number(currentYearDemand));
  };

  const currentYearDemandHandler = (event) => {
    setCurrentYearDemand(event.target.value);
    setTotalDemand(+openingBalance + +event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      noProps.trim().length === 0 ||
      openingBalance.trim().length === 0 ||
      currentYearDemand.trim().length === 0
    ) {
      return;
    }

    if (!isDisabled) {
      const ptax = {
        ...props.data,
        totalNumberOfProperty: noProps,
        openingBalance: openingBalance,
        currentYearDemand: currentYearDemand,
      };
      props.updatePtax(ptax);
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return (
    <div className={styles.container__general}>
      <div className={styles.heading__primary}>
        <h1>Property Tax Collection - {props.data.financialYear}</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className={styles["form__general--info"]}>
          <Input
            className={styles.test}
            label="Total No of properties"
            type="number"
            id="totalnoofproperties"
            value={noProps}
            onChange={noPropsHandler}
            disabled={isDisabled}
          />

          <Input
            className={styles.test}
            label="Opening Balance"
            type="number"
            id="openingbalance"
            value={openingBalance}
            onChange={openingBalanceHandler}
            disabled={isDisabled}
          />

          <Input
            className={styles.test}
            label="Current year Demand"
            type="number"
            id="currentyearDemand"
            value={currentYearDemand}
            onChange={currentYearDemandHandler}
            disabled={isDisabled}
          />

          <Input
            className={styles.test}
            label="Total Demand"
            type="number"
            id="totalDemand"
            value={totalDemand}
            onChange={currentYearDemandHandler}
            disabled={true}
          />
        </div>
        <div className={styles.submit__button}>
          <button type="submit">{isDisabled ? "Edit" : "Update"}</button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
