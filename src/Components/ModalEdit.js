import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EditForm from "./EditForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.action";
import UserEntryDetails from "../hooks/userEntryDetails";

export default function ModalEdit({
  isOpen,
  description,
  value,
  isExpense,
  id,
}) {
  const dispatch = useDispatch();
  const entryUpdate = UserEntryDetails(description, value, isExpense);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Transaction</Modal.Header>
      <Modal.Content>
        <EditForm
          isExpense={entryUpdate.isExpense}
          description={entryUpdate.description}
          value={entryUpdate.value}
          setvalue={entryUpdate.setvalue}
          setdescription={entryUpdate.setdescription}
          setisExpense={entryUpdate.setisExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateTransaction(id)} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
