import React from "react";

import { GetDataForm } from "./GetDataForm";
import GeneralInfo from "./Ptax/GeneralInfo";
import PtaxCollection from "./Ptax/PtaxCollection";

import classes from "./UpdateDCB.module.css";

export const UpdateDCB = () => {
  const data = {
    financialYear: "2022-23",
    totalNumberOfProperty: 4626,
    openingBalance: 5.8,
    currentYearDemand: 75,
  };

  const collectionAmt = [
    {
      month: "April",
      year: 2021,
      OBC: "1.2",
      CYD: "2.3",
    },
    {
      month: "May",
      year: 2021,
      OBC: "1.2",
      CYD: "2.3",
    },
    {
      month: "June",
      year: 2021,
      OBC: "1.2",
      CYD: "2.3",
    },
  ];
  const ptaxCollection = collectionAmt.map((collection) => (
    <PtaxCollection data={collection} />
  ));

  return (
    <div className={classes["container"]}>
      <GetDataForm />
      <GeneralInfo data={data} />
      {ptaxCollection}
    </div>
  );
};
