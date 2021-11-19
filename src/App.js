import React, { useEffect, useState } from "react";
import "./styles.css";
import Test1 from "./Test1";
import Main from "./useContext/Main";

export default function App() {
  const [inputs, setInputs] = useState({
    isVisible: false
  });
  const [aboutMe, setAboutMe] = useState({
    name: "Musobek",
    age: "22",
    laptop: "MacBook"
  });
  const [myCar, setMyCar] = useState("BMW");
  const [count, setCount] = useState(0);

  function changeLaptopToAsus() {
    aboutMe.laptop === "MacBook"
      ? setAboutMe({ ...aboutMe, laptop: "ASUS" })
      : setAboutMe({ ...aboutMe, laptop: "MacBook" });
  }

  const handleChange = (event) => {
    const [name, value] = [event.target.name, event.target.value];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs((values) => ({ ...values, isVisible: true }));
  };

  const handleSelect = (event) => {
    setMyCar(event.target.value);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [myCar]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Test1 {...aboutMe} changeLaptopToAsus={changeLaptopToAsus} />

      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your birth year:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>

      {inputs.isVisible ? (
        <h1>{`Salom ${inputs.username}, sen ${
          2021 - +inputs.age
        } yoshdasan!`}</h1>
      ) : (
        ""
      )}
      <hr />
      <form>
        <select value={myCar} onChange={handleSelect}>
          <option value="BMW">BMW</option>
          <option value="Land Rover">Land Rover</option>
          <option value="Audi">Audi</option>
        </select>
      </form>
      <h2>{`Senda ${myCar} mashinasi bor ekan!`}</h2>
      <hr />

      <h1>I've rendered {count} times!</h1>

      <Main />
    </div>
  );
}
