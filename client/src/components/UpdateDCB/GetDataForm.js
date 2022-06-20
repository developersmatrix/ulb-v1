import { useRef } from "react";

import { useDispatch } from "react-redux";

import Card from "../UI/Card/Card";
import classes from "./GetDataForm.module.css";

// import { addPtax } from "../../store/ptax/ptaxSlice";
import { getPtaxCollection } from "../../store/ptax/ptaxAction";

export const GetDataForm = () => {
  const collectionTypeRef = useRef(null);
  const financialYearRef = useRef(null);

  const dispatch = useDispatch();

  const getDataHandler = (event) => {
    event.preventDefault();

    const collectionType = collectionTypeRef.current.value;

    const financialYear = financialYearRef.current.value;
    const startYear = financialYear.split("-")[0];
    const endYear = Number(startYear) + 1;

    console.log(collectionType);
    console.log(startYear, endYear);
    const params = {
      collectionType,
      startYear,
    };

    console.log(params);

    // dispatch(
    //   addPtax({
    //     id: 1,
    //     userId: 0,
    //     ptax: "21.25",
    //     startYear,
    //     endYear,
    //   })
    // );
    dispatch(getPtaxCollection(params));
  };

  return (
    <form onSubmit={getDataHandler}>
      <Card className={classes["container"]}>
        <h1 className={classes["title"]}>Update Daily Collection Book</h1>
        <div>
          <div className={classes["input"]}>
            <label htmlFor="ctype">Collection Type</label>
            <select
              name="ctype"
              ref={collectionTypeRef}
              id="ctype"
              className={classes.select}
            >
              {/* <option value="">Select</option> */}
              <option value="sas">Property Tax</option>
              <option value="water">Water Tax</option>
              <option value="rent">Lease & Rent</option>
              <option value="ad">Advertisement</option>
              <option value="trade">Trade License</option>
            </select>
          </div>
          <div className={classes["input"]}>
            <label htmlFor="year">Financial Year</label>
            <select
              name="year"
              id="year"
              ref={financialYearRef}
              className={classes.select}
            >
              {/* <option value="">Select</option> */}
              <option value="2022-23">2022-23</option>
              <option value="2021-22">2021-22</option>
              <option value="2020-21">2020-21</option>
            </select>
          </div>
        </div>

        <div>
          <button type="submit" className={classes["button"]}>
            Get Data
          </button>
        </div>
      </Card>
    </form>
  );
};
