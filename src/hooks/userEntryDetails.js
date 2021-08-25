import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntry, updateEntry } from "../actions/entries.action";
import { v4 as uuidv4 } from "uuid";
import { closeEditModal } from "../actions/modals.action";

function UserEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setdescription] = useState(desc);
  const [value, setvalue] = useState(val);
  const [isExpense, setisExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setdescription(desc);
    setvalue(val);
    setisExpense(isExp);
  }, [desc, val, isExp]);

  const updateTransaction = (id) => {
    dispatch(
      updateEntry(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  };

  const addTransaction = () => {
    dispatch(
      addEntry({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    resetValues();
  };

  const resetValues = () => {
    setdescription("");
    setvalue("");
    setisExpense("");
  };
  return {
    description,
    setdescription,
    value,
    setvalue,
    isExpense,
    setisExpense,
    addTransaction,
    updateTransaction,
  };
}

export default UserEntryDetails;
