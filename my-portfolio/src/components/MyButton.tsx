/* eslint-disable @typescript-eslint/no-redeclare */
import { Button } from "antd";
import { ButtonType } from "antd/es/button";

interface MyButton {
  handleClick: () => void;
  buttonColor: ButtonType;
  buttonName: string;
}

export const MyButton = (props: MyButton) => {
  return (
    <>
      <Button type={props.buttonColor} onClick={props.handleClick} typeof="">
        {props.buttonName}
      </Button>
    </>
  );
};
