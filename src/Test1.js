import React from "react";
import MacBook from "./MacBook";

export default function Test1({ name, age, laptop, changeLaptopToAsus }) {
  function deleteValue() {
    changeLaptopToAsus();
  }
  return (
    <>
      <h1>
        My name is {name} and I am {age} years old!
        <MacBook laptop={laptop} deleteValue={deleteValue} />
      </h1>
    </>
  );
}
