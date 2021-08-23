import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";

export default function Transaction({
  id,
  description,
  value,
  isExpense = false,
  deleteTransaction,
  editTransaction,
}) {
  return (
    <>
      <Segment color={isExpense === true ? "red" : "green"}>
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left">{description}</Grid.Column>
            <Grid.Column>{value}</Grid.Column>
            <Grid.Column>
              <Icon name="edit" bordered onClick={() => editTransaction(id)} />
              <Icon name="trash" onClick={() => deleteTransaction(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
