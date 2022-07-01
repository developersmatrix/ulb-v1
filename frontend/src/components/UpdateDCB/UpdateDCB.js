import React, { useState, useEffect } from "react";

import { GetDataForm } from "./GetDataForm";
import GeneralInfo from "./Ptax/GeneralInfo";
import PtaxCollectionList from "./Ptax/PtaxCollectionList";

import classes from "./UpdateDCB.module.css";

export const UpdateDCB = () => {
  const [gotData, setGotData] = useState(false);

  const updateGotData = (value) => value;

  // useEffect(() => {
  //   updateGotData();
  // });

  const data = {
    financialYear: "2022-23",
    totalNumberOfProperty: 4626,
    openingBalance: 5.8,
    currentYearDemand: 75,
  };

  console.log(gotData);

  return (
    <div className={classes["container"]}>
      <GetDataForm gotData={setGotData} />
      {gotData && <GeneralInfo data={data} />}
      {gotData && <PtaxCollectionList />}
    </div>
  );
};
