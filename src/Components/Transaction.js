import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteEntry } from "../actions/entries.action";
import { openEditModal } from "../actions/modals.action";

export default function Transaction({
  id,
  description,
  value,
  isExpense = false,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <Segment color={isExpense === true ? "red" : "green"}>
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left">{description}</Grid.Column>
            <Grid.Column>{value}</Grid.Column>
            <Grid.Column>
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModal(id))}
              />
              <Icon name="trash" onClick={() => dispatch(deleteEntry(id))} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
