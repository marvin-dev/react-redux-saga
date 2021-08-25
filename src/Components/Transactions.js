import React from "react";
import { Container } from "semantic-ui-react";
import Transaction from "./Transaction";

export default function Transactions({ transactions }) {
  return (
    <Container>
      {transactions.map((trans) => (
        <Transaction key={trans.id} {...trans} />
      ))}
    </Container>
  );
}
