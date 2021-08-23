import React from "react";
import { Form } from "semantic-ui-react";
import ButtonComponent from "./ButtonComponent";
import EditForm from "./EditForm";

export default function FormComponent({
  addTransaction,
  description,
  value,
  isExpense,
  setvalue,
  setdescription,
  setisExpense,
}) {
  return (
    <Form unstackable>
      <EditForm
        isExpense={isExpense}
        description={description}
        value={value}
        setvalue={setvalue}
        setdescription={setdescription}
        setisExpense={setisExpense}
      />
      <ButtonComponent addTransaction={addTransaction} />
    </Form>
  );
}
