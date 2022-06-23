import { Fragment } from "react";
import PtaxCollection from "./PtaxCollection";

const PtaxCollectionList = (props) => {
  const collectionAmt = [
    {
      id: "1",
      month: "April",
      year: 2021,
      OBC: "1.2",
      CYD: "2.3",
    },
    {
      id: "2",
      month: "May",
      year: 2021,
      OBC: "1.2",
      CYD: "2.3",
    },
    {
      id: "3",
      month: "June",
      year: 2021,
      OBC: "1.2",
      CYD: "2.3",
    },
  ];
  const ptaxCollection = collectionAmt.map((collection) => (
    <PtaxCollection key={collection.id} data={collection} />
  ));

  return <Fragment>{ptaxCollection}</Fragment>;
};

export default PtaxCollectionList;
