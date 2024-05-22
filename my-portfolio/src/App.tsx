import { ChangeEvent, useState } from "react";
import { Greet } from "./components/Greet";
import { MyButton } from "./components/MyButton";
import { User } from "./components/User";
import { MyInputBox } from "./components/MyInputBox";
import { Flex, Form } from "antd";
import "./components/style.css";
function App() {
  const [sexInput, setSexInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [greetHidden, setGreetHidden] = useState(true);
  const [userName, setUserName] = useState({
    first: "",
    last: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    if (!firstNameInput || !sexInput || !lastNameInput) {
      alert("Please fill out all the required fields before submitting.");
      return;
    } else {
      setUserName({
        first: firstNameInput,
        last: lastNameInput,
      });
      setGreetHidden(false);
      setIsLoggedIn(true);
    }
    event.preventDefault();
  };
  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
        className={greetHidden ? "display" : "hidden"}
      >
        <Flex vertical>
          {" "}
          <MyInputBox
            size="small-input"
            handleChange={function (event: ChangeEvent<HTMLInputElement>) {
              console.log(event.target.value);
              setFirstNameInput(event.target.value);
            }}
          ></MyInputBox>
          <MyInputBox
            size="small-input"
            handleChange={function (event: ChangeEvent<HTMLInputElement>) {
              console.log(event.target.value);
              setLastNameInput(event.target.value);
            }}
          ></MyInputBox>
          <MyInputBox
            size="small-input"
            handleChange={function (event: ChangeEvent<HTMLInputElement>) {
              console.log(event.target.value);
              setSexInput(event.target.value);
            }}
          ></MyInputBox>
          <MyInputBox
            size="small-input"
            type="submit"
            value="Submit"
          ></MyInputBox>
        </Flex>
      </form>
      <Greet isLoggedIn={isLoggedIn} isHidden={greetHidden}>
        <User name={userName} sex={sexInput} />
      </Greet>
    </div>
  );
}

export default App;
