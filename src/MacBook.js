import React from "react";

export default function MacBook({ laptop, deleteValue }) {
  function changeLaptop(event) {
    deleteValue();
    console.log(event.type);
  }

  return (
    <>
      <h1>
        I have <span onClick={changeLaptop}>{laptop}</span>! Cool !?
      </h1>
    </>
  );
}
