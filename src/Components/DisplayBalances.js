import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import Balance from "./Balance";

export default function DisplayBalances({ totalIncome, totalExpense }) {
  return (
    <Segment textAlign="center">
      <Grid divided columns="2">
        <Grid.Row>
          <Grid.Column>
            <Balance title="Income" value={totalIncome} color="green" />
          </Grid.Column>
          <Grid.Column>
            <Balance title="Expense" value={totalExpense} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
