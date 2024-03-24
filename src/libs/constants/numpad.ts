export type ButtonType =
  | "getNum"
  | "getOper"
  | "getPoint"
  | "getResult"
  | "delCalc";
export const numpadButtons: Array<{
  type: string;
  value?: string;
  label: string;
  onClick: ButtonType;
}> = [
  { type: "number", value: "1", label: "1", onClick: "getNum" },
  { type: "number", value: "2", label: "2", onClick: "getNum" },
  { type: "number", value: "3", label: "3", onClick: "getNum" },
  { type: "operator", value: "×", label: "×", onClick: "getOper" },
  { type: "operator", value: "÷", label: "÷", onClick: "getOper" },
  { type: "number", value: "4", label: "4", onClick: "getNum" },
  { type: "number", value: "5", label: "5", onClick: "getNum" },
  { type: "number", value: "6", label: "6", onClick: "getNum" },
  { type: "operator", value: "+", label: "+", onClick: "getOper" },
  { type: "operator", value: "-", label: "-", onClick: "getOper" },
  { type: "number", value: "7", label: "7", onClick: "getNum" },
  { type: "number", value: "8", label: "8", onClick: "getNum" },
  { type: "number", value: "9", label: "9", onClick: "getNum" },
  { type: "operator", value: "%", label: "%", onClick: "getOper" },
  { type: "operator", value: "^", label: "^", onClick: "getOper" },
  { type: "number", value: ".", label: ".", onClick: "getPoint" },
  { type: "number", value: "0", label: "0", onClick: "getNum" },
  { type: "action", label: "DEL", onClick: "delCalc" },
  { type: "operator", label: "=", onClick: "getResult" },
];
