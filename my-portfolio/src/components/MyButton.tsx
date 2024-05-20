/* eslint-disable @typescript-eslint/no-redeclare */
import { Button } from "antd";
import { ButtonType } from "antd/es/button";

interface MyButton {
  buttonType: ButtonType;
  buttonName: string;
}
function handleClick() {}

export const MyButton = (props: MyButton) => {
  return (
    <>
      <Button type={props.buttonType} onClick={handleClick}>
        {props.buttonName}
      </Button>
    </>
  );
};
