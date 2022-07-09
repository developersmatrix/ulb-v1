import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetDataForm } from "./GetDataForm";
import GeneralInfo from "./Ptax/GeneralInfo";
import PtaxCollectionList from "./Ptax/PtaxCollectionList";
import { resetPtax } from "../../store/ptax/ptaxSlice";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import styles from "./UpdateDCB.module.css";

export const UpdateDCB = () => {
  const gotData = useSelector((state) => state.ptax.dataFetched);
  const data = useSelector((state) => state.ptax.ptaxData);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetPtax());
    };
  }, [dispatch]);

  return (
    <div className={styles["container"]}>
      <GetDataForm />
      {gotData && Object.keys(data).length > 0 && <GeneralInfo id={data._id} />}

      {gotData && Object.keys(data).length === 0 && (
        <Card className={styles["btn-container"]}>
          <Button>Add General details</Button>
        </Card>
      )}

      {gotData &&
        Object.keys(data).length > 0 &&
        data.monthlyCollection.length > 0 && <PtaxCollectionList />}

      {gotData &&
        Object.keys(data).length > 0 &&
        data.monthlyCollection.length === 0 && (
          <Card className={styles["btn-container"]}>
            <Button>Add General details</Button>
          </Card>
        )}
    </div>
  );
};
