import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import Balance from "./Balance";

export default function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid divided columns="2">
        <Grid.Row>
          <Grid.Column>
            <Balance title="Income" value="9,000" color="green" />
          </Grid.Column>
          <Grid.Column>
            <Balance title="Expense" value="3,000" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
