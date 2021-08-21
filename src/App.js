import { Container, Form } from "semantic-ui-react";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import MainHeader from "./Components/MainHeader";
import FormComponent from "./Components/FormComponent";
import Balance from "./Components/Balance";
import DisplayBalances from "./Components/DisplayBalances";
import Transactions from "./Components/Transactions";

function App() {
  return (
    <Container>
      <MainHeader title="Budget Web App" />
      <Balance title="Your Balance" value="150,000" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <Transactions description="Deposit" value="10,000" />
      <Transactions description="Payment" value="1,000" isExpense />
      <Transactions description="Grocery" value="4,000" isExpense />
      <Transactions description="Interest" value="800" />

      <MainHeader title="Add new transaction" type="" h3 />

      <Form unstackable>
        <FormComponent />
        <ButtonComponent />
      </Form>
    </Container>
  );
}

export default App;
