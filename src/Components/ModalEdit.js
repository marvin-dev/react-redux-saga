import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EditForm from "./EditForm";

export default function ModalEdit({
  isOpen,
  setOpen,
  addTransaction,
  description,
  value,
  isExpense,
  setvalue,
  setdescription,
  setisExpense,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Transaction</Modal.Header>
      <Modal.Content>
        <EditForm
          isExpense={isExpense}
          description={description}
          value={value}
          setvalue={setvalue}
          setdescription={setdescription}
          setisExpense={setisExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
        <Button onClick={() => setOpen(false)} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
