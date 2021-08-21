import React from "react";
import { Statistic } from "semantic-ui-react";

export default function Balance({
  title,
  value,
  color = "#000",
  size = "tiny",
}) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "center" }}>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}
