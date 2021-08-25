import React from "react";
import { Form } from "semantic-ui-react";
import ButtonComponent from "./ButtonComponent";
import EditForm from "./EditForm";
import userEntryDetails from "../hooks/userEntryDetails";

export default function FormComponent() {
  const {
    description,
    setdescription,
    value,
    setvalue,
    isExpense,
    setisExpense,
    addTransaction,
  } = userEntryDetails();

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
      <ButtonComponent addEntry={addTransaction} />
    </Form>
  );
}
