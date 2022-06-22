import Card from "../../UI/Card/Card";
import Form from "../../UI/Form/Form";
import Input from "../../UI/Input/Input";
import styles from "./PtaxCollection.module.css";

const PtaxCollection = (props) => {
  return (
    <Card>
      <Form>
        <h1 className={styles.heading__primary}>
          {props.month} {props.year}
        </h1>
        <div className={styles.inputContainer}>
          <Input
            label="OB Collection"
            type="number"
            id="obcollection"
            value={""}
            onChange={""}
            disabled={""}
          />
          <Input
            label="Demand Collection"
            type="number"
            id="cydcollection"
            value={""}
            onChange={""}
            disabled={""}
          />
          <Input
            label="Total collection"
            type="number"
            id="totalcollection"
            value={""}
            onChange={""}
            disabled={true}
          />
        </div>
      </Form>
    </Card>
  );
};

export default PtaxCollection;
