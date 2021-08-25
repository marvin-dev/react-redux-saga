import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import FormComponent from "./Components/FormComponent";
import Balance from "./Components/Balance";
import DisplayBalances from "./Components/DisplayBalances";
import Transactions from "./Components/Transactions";
import ModalEdit from "./Components/ModalEdit";
import { useSelector, useDispatch } from "react-redux";
import { getEntries } from "./actions/entries.action";

function App() {
  const [incomeTotal, setincomeTotal] = useState(0);
  const [expenseTotal, setexpenseTotal] = useState(0);
  const [total, settotal] = useState(0);
  const [entry, setentry] = useState();
  const entries = useSelector((state) => state.entries);
  const { open, id } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setentry(entries[index]);
    // eslint-disable-next-line
  }, [open, id]);

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
    // eslint-disable-next-line
  }, [entries]);

  return (
    <Container>
      <MainHeader title="Budget Web App" />
      <Balance title="Your Balance" value={total} size="small" />

      <DisplayBalances totalIncome={incomeTotal} totalExpense={expenseTotal} />

      <MainHeader title="History" type="h3" />

      <Transactions transactions={entries} />

      <MainHeader title="Add new transaction" type="" h3 />

      <FormComponent />
      <ModalEdit isOpen={open} {...entry} />
    </Container>
  );
}

export default App;
