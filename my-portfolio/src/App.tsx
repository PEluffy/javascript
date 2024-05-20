import { Greet } from "./components/Greet";
import { MyButton } from "./components/MyButton";
import { User } from "./components/User";
function App() {
  const userName = {
    first: "Ram",
    last: "Magar",
  };
  return (
    <div className="App">
      <Greet isLoggedIn={false}>
        <User name={userName} sex="male" />
      </Greet>
      <MyButton buttonType="primary" buttonName="Login"></MyButton>
    </div>
  );
}

export default App;
