import React from "react";

import { GetDataForm } from "./GetDataForm";
import GeneralInfo from "./Ptax/GeneralInfo";

import classes from "./UpdateDCB.module.css";

export const UpdateDCB = () => {
  const data = {
    financialYear: "2021-22",
    totalNumberOfProperty: 4626,
    openingBalance: 5.8,
    currentYearDemand: 75,
  };

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Update Daily Collection Book</h1>
      <GetDataForm />
      <GeneralInfo data={data} />
    </div>
  );
};
