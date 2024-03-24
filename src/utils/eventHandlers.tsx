import React from "react";
import { ButtonClickHandlers } from "../interfaces/ButtonClickHandler";

export const handleKeyDown =
  (buttonClickHandlers: ButtonClickHandlers) =>
  (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key >= "0" && e.key <= "9") {
      buttonClickHandlers.getNum(e.key);
    } else if (e.key === "+") {
      buttonClickHandlers.getOper("+");
    } else if (e.key === "-") {
      buttonClickHandlers.getOper("-");
    } else if (e.key === "*") {
      buttonClickHandlers.getOper("×");
    } else if (e.key === "/") {
      buttonClickHandlers.getOper("÷");
    } else if (e.key === ".") {
      buttonClickHandlers.getPoint();
    } else if (e.key === "%") {
      buttonClickHandlers.getOper("%");
    } else if (e.key === "^") {
      buttonClickHandlers.getOper("^");
    }

    if (e.key === "Enter") {
      buttonClickHandlers.getResult();
    } else if (e.key === "Backspace") {
      buttonClickHandlers.delCalc();
    }
  };
