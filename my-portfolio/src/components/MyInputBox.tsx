import { Input } from "antd";
import "./style.css";
interface MyInputBox {
  size: string;
}
export const MyInputBox = (props: MyInputBox) => {
  return (
    <>
      <Input className={props.size}></Input>
    </>
  );
};
