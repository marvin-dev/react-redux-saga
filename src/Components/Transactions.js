import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";

export default function Transactions({
  description,
  value,
  isExpense = false,
}) {
  return (
    <Segment color={isExpense === true ? "red" : "green"}>
      <Grid columns="3" textAlign="right">
        <Grid.Row>
          <Grid.Column textAlign="left">{description}</Grid.Column>
          <Grid.Column>{value}</Grid.Column>
          <Grid.Column>
            <Icon name="edit" bordered />
            <Icon name="trash" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
