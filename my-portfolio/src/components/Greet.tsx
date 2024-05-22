import "./style.css";
interface GreetProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
  isHidden: boolean;
}
export const Greet = (props: GreetProps) => {
  return (
    <div className={props.isHidden ? "hidden" : "display"}>
      {props.isLoggedIn ? (
        <h2>hello {props.children}</h2>
      ) : (
        <h2>Hello User plz login to get your name specified</h2>
      )}
    </div>
  );
};
