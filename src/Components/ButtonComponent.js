import React from "react";
import { Button } from "semantic-ui-react";

export default function ButtonComponent() {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary>Save</Button>
    </Button.Group>
  );
}
