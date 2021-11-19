import React from "react";
import ChildOfChild from "./ChildOfChild";

export default function Child({ changeYear }) {
  return (
    <div>
      <ChildOfChild />
      <button onClick={changeYear}>CLICK ME</button>
    </div>
  );
}
