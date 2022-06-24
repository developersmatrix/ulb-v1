import { Fragment } from "react";
import { useSelector } from "react-redux";
import PtaxCollection from "./PtaxCollection";

const PtaxCollectionList = (props) => {
  const collectionAmt = useSelector((state) => state.ptax[0].monthlyCollection);

  const ptaxCollection = collectionAmt.map((collection) => (
    <PtaxCollection key={collection.id} data={collection} />
  ));

  return <Fragment>{ptaxCollection}</Fragment>;
};

export default PtaxCollectionList;
