import { Input } from "antd";
import "./style.css";
interface MyInputBox {
  size: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
}
export const MyInputBox = (props: MyInputBox) => {
  return (
    <>
      <Input
        className={props.size}
        onChange={props.handleChange}
        type={props.type}
        value={props.value}
      ></Input>
    </>
  );
};
