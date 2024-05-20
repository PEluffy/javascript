interface GreetProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
}
export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>hello {props.children}</h2>
      ) : (
        <h2>Hello User plz login to get your name specified</h2>
      )}
    </div>
  );
};
