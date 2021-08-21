import React from "react";
import { Form } from "semantic-ui-react";
export default function FormComponent() {
  return (
    <Form.Group>
      <Form.Input
        icon="tags"
        width={12}
        label="Description"
        placeholder="New shinny thing"
      />

      <Form.Input
        width={4}
        label="Value"
        placeholder="100.00"
        icon="dollar"
        iconPosition="left"
      />
    </Form.Group>
  );
}
