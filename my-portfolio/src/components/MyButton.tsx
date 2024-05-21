/* eslint-disable @typescript-eslint/no-redeclare */
import { Button } from "antd";
import { ButtonType } from "antd/es/button";

interface MyButton {
  handleClick: () => void;
  buttonType: ButtonType;
  buttonName: string;
}

export const MyButton = (props: MyButton) => {
  return (
    <>
      <Button type={props.buttonType} onClick={props.handleClick}>
        {props.buttonName}
      </Button>
    </>
  );
};
