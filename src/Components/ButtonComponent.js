import React from "react";
import { Button } from "semantic-ui-react";

export default function ButtonComponent({ addEntry }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry()}>
        Save
      </Button>
    </Button.Group>
  );
}
