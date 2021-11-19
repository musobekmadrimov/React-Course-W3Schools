import React, { createContext, useState } from "react";
import Child from "./Child";

export const CarContext = createContext();

export default function Main() {
  const [audi, setAudi] = useState({
    year: 2021,
    model: "Q8",
    owner: "Musobek"
  });

  function changeYear() {
    setAudi({
      ...audi,
      year: audi.year - 1
    });
  }

  return (
    <CarContext.Provider value={audi}>
      <div>
        {audi.owner} has Audi, which model is {audi.model} and made in{" "}
        {audi.year}!
        <Child changeYear={changeYear} />
      </div>
    </CarContext.Provider>
  );
}
