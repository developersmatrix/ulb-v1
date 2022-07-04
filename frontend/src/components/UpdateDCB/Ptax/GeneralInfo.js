import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Form from "../../UI/Form/Form";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import styles from "./GeneralInfo.module.css";
import { useSelector } from "react-redux";

const GeneralInfo = (props) => {
  const [noProps, setNoProps] = useState(props.data.totalNumberOfProperty);
  const [openingBalance, setOpeningBalance] = useState(
    props.data.openingBalance
  );

  const info = useSelector((state) => state.ptax[0]);

  const tnp =
    Number(info.commercial) + Number(info.vacant) + Number(info.residential);

  // console.log(tnp);

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
    <Card className={styles.container__general}>
      <Form onSubmit={submitHandler}>
        <h1 className={styles.heading__primary}>
          Property Tax Collection - {props.data.financialYear}
        </h1>
        <div className={styles["form__general--info"]}>
          <Input
            label="Total No of properties"
            type="number"
            id="totalnoofproperties"
            value={tnp}
            onChange={noPropsHandler}
            disabled={isDisabled}
          />

          <Input
            label="Opening Balance"
            type="number"
            id="openingbalance"
            value={info.openingBalance}
            onChange={openingBalanceHandler}
            disabled={isDisabled}
          />

          <Input
            label="Current year Demand"
            type="number"
            id="currentyearDemand"
            value={info.currentYearDemand}
            onChange={currentYearDemandHandler}
            disabled={isDisabled}
          />

          <Input
            label="Total Demand"
            type="number"
            id="totalDemand"
            value={totalDemand}
            onChange={currentYearDemandHandler}
            disabled={true}
          />
        </div>
        <Button type="submit">{isDisabled ? "Edit" : "Update"}</Button>
      </Form>
    </Card>
  );
};

export default GeneralInfo;
