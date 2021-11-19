import React, { useContext } from "react";
import { CarContext } from "./Main";

export default function ChildOfChild() {
  const car = useContext(CarContext);
  return (
    <>
      <h1>Child Of Child Component</h1>
      <h2>
        {car.owner}, your {car.model} is {2021 - car.year} years old!
      </h2>
    </>
  );
}
