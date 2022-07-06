import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetDataForm } from "./GetDataForm";
import GeneralInfo from "./Ptax/GeneralInfo";
import PtaxCollectionList from "./Ptax/PtaxCollectionList";
import { resetPtax } from "../../store/ptax/ptaxSlice";

import classes from "./UpdateDCB.module.css";

export const UpdateDCB = () => {
  const gotData = useSelector((state) => state.ptax.dataFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetPtax());
    };
  }, [dispatch]);

  return (
    <div className={classes["container"]}>
      <GetDataForm />
      {gotData && <GeneralInfo />}
      {gotData && <PtaxCollectionList />}
    </div>
  );
};
