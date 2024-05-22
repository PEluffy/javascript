interface User {
  name: {
    first: string;
    last: string;
  };
  sex?: string;
}

export const User = (props: User) => {
  const { sex = "not specified" } = props;
  return (
    <>
      {props.name.first} {props.name.last} your is sex is {sex}
    </>
  );
};
