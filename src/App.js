import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import FormComponent from "./Components/FormComponent";
import Balance from "./Components/Balance";
import DisplayBalances from "./Components/DisplayBalances";
import Transactions from "./Components/Transactions";
import ModalEdit from "./Components/ModalEdit";

function App() {
  const [entries, setentries] = useState(initialEntries);
  const [description, setdescription] = useState("");
  const [value, setvalue] = useState("");
  const [isExpense, setisExpense] = useState(true);
  const [open, setOpen] = useState(false);
  const [entryID, setentryID] = useState(null);
  const [incomeTotal, setincomeTotal] = useState(0);
  const [expenseTotal, setexpenseTotal] = useState(0);
  const [total, settotal] = useState(0);

  useEffect(() => {
    if (!open && entryID) {
      const index = entries.findIndex((item) => item.id === entryID);
      const newEntries = [...entries];

      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setentries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      } else {
        return (totalIncome += Number(entry.value));
      }
    });
    settotal(totalIncome - totalExpense);
    setexpenseTotal(totalExpense);
    setincomeTotal(totalIncome);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]);

  const deleteTransaction = (id) => {
    const result = entries.filter((item) => item.id !== id);
    console.log("entries", entries);
    console.log("result", result);
    setentries(result);
  };

  const editTransaction = (id) => {
    console.log(`EDIT WORKING ID = ${id}`);
    if (id) {
      const index = entries.findIndex((item) => item.id === id);
      const entry = entries[index];
      setentryID(id);
      setdescription(entry.description);
      setvalue(entry.value);
      setisExpense(entry.isExpense);
      setOpen(true);
    }
  };

  const addTransaction = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log("entries", entries);
    console.log("result", result);
    setentries(result);
    resetEntry();
  };

  const resetEntry = () => {
    setdescription("");
    setvalue("");
    setisExpense(true);
  };

  return (
    <Container>
      <MainHeader title="Budget Web App" />
      <Balance title="Your Balance" value={total} size="small" />

      <DisplayBalances totalIncome={incomeTotal} totalExpense={expenseTotal} />

      <MainHeader title="History" type="h3" />

      <Transactions
        transactions={entries}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
      />

      <MainHeader title="Add new transaction" type="" h3 />

      <FormComponent
        addTransaction={addTransaction}
        isExpense={isExpense}
        description={description}
        value={value}
        setvalue={setvalue}
        setdescription={setdescription}
        setisExpense={setisExpense}
      />
      <ModalEdit
        isOpen={open}
        setOpen={setOpen}
        addTransaction={addTransaction}
        isExpense={isExpense}
        description={description}
        value={value}
        setvalue={setvalue}
        setdescription={setdescription}
        setisExpense={setisExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Salary income",
    value: 30000,
    isExpense: false,
  },
  {
    id: 2,
    description: "House Rent",
    value: 5000,
    isExpense: true,
  },
  {
    id: 3,
    description: "Payment",
    value: 5000,
    isExpense: true,
  },
  {
    id: 4,
    description: "Monthly contribution",
    value: 5000,
    isExpense: true,
  },
  {
    id: 5,
    description: "Maintenance",
    value: 3000,
    isExpense: true,
  },
];
