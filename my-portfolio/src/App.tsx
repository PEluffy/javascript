import { useState } from "react";
import { Greet } from "./components/Greet";
import { MyButton } from "./components/MyButton";
import { User } from "./components/User";
import { MyInputBox } from "./components/MyInputBox";
import { Flex } from "antd";

function App() {
  const [userName, setUserName] = useState({
    first: "ram",
    last: "bahadur",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const userName = {
  //   first: "Ram",
  //   last: "Magar",
  // };
  return (
    <div className="App">
      <Flex vertical>
        {" "}
        <MyInputBox size="small-input"></MyInputBox>
        <MyInputBox size="small-input"></MyInputBox>
        <MyButton
          buttonType="primary"
          buttonName="Login"
          handleClick={() => {
            setIsLoggedIn(true);
          }}
        ></MyButton>
      </Flex>
      <Greet isLoggedIn={isLoggedIn} isHidden={true}>
        <User name={userName} sex="male" />
      </Greet>
    </div>
  );
}

export default App;
