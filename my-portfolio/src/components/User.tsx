interface User {
  name: {
    first: string;
    last: string;
  };
  sex?: "male" | "female";
}

export const User = (props: User) => {
  const { sex = "not specified" } = props;
  return (
    <>
      <h2>
        {props.name.first}
        {props.name.last} sex is {sex}
      </h2>
    </>
  );
};
