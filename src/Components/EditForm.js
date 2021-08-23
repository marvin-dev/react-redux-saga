import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

export default function FormComponent({
  isExpense,
  description,
  value,
  setvalue,
  setdescription,
  setisExpense,
}) {
  return (
    <>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            width={12}
            label="Description"
            placeholder="New shinny thing"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />

          <Form.Input
            width={4}
            label="Value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
        </Form.Group>

        <Segment compact>
          <Checkbox
            toggle
            label="is expense"
            checked={isExpense}
            onChange={() => setisExpense((prevState) => !prevState)}
          />
        </Segment>
      </Form>
    </>
  );
}
