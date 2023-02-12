import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volvi a dibujar js");

  return <small>{value}</small>;
});
