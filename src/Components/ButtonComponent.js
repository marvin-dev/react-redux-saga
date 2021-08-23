import React from "react";
import { Button } from "semantic-ui-react";

export default function ButtonComponent({ addTransaction }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addTransaction()}>
        Save
      </Button>
    </Button.Group>
  );
}
