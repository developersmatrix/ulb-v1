import React from "react";

import { GetDataForm } from "./GetDataForm";
import { Ptax } from "./Ptax/Ptax";

import classes from "./UpdateDCB.module.css";

export const UpdateDCB = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Update Daily Collection Book</h1>
      <GetDataForm />
      <Ptax />
    </div>
  );
};
