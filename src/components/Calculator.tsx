import React, { useState, useRef, useEffect } from "react";
import "../tailwind.css";
import { create, all } from "mathjs";
import { toast } from "react-toastify";
import { TiBackspace } from "react-icons/ti";
import { handleKeyDown } from "../utils/eventHandlers";
import { numpadButtons, ButtonType } from "../libs/constants/numpad";
import { ButtonClickHandlers } from "../interfaces/ButtonClickHandler";
import {
  validateDivisionByZero,
  validateInput,
  validateResultBounds,
} from "../utils/validation";

const config = {};
const math = create(all, config);

const Calculator: React.FC = () => {
  const [calc, setCalc] = useState<string>("0");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  const buttonClickHandlers: ButtonClickHandlers = {
    getNum: (value: string) => {
      setCalc((prevCalc) => (prevCalc === "0" ? value : prevCalc + value));
    },
    getOper: (value?: string) => {
      const operator = value === "×" ? "*" : value === "÷" ? "/" : value;
      setCalc((prevCalc) => (prevCalc === "0" ? "" : prevCalc) + operator);
    },
    getPoint: () => {
      if (!calc.includes(".")) setCalc((prevCalc) => prevCalc + ".");
    },
    getResult: () => {
      try {
        if (!validateDivisionByZero(calc)) {
          toast.error("Error: Cannot divide by zero");
          setCalc("");
          return;
        }
        if (!validateInput(calc)) {
          toast.error("Error: Invalid input");
          setCalc("");
          return;
        }
        const result = math.evaluate(calc);
        if (!validateResultBounds(result)) {
          toast.error("Error: Result out of bounds");
          setCalc("");
          return;
        }
        setCalc(String(result));
        toast.success("Calculation successful");
      } catch (error) {
        toast.error("Error: Invalid calculation");
        setCalc("");
      }
    },
    delCalc: () => {
      setCalc((prevCalc) =>
        prevCalc.length > 1 ? prevCalc.slice(0, -1) : "0"
      );
    },
  };

  const handleClick = (action: ButtonType, value?: string) => {
    const handler = buttonClickHandlers[action];
    if (!handler) return;

    if (action === "delCalc" || action === "getResult") {
      (handler as () => void)();
    } else if (value !== undefined) {
      handler(value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF]">
      <div className="w-[550px] h-[450px] bg-[#242530] p-5 shadow-lg flex flex-col items-center justify-center">
        <input
          className="mb-4 w-full p-5 bg-[#3A3F77] text-white text-3xl text-right rounded-3xl shadow-xl"
          readOnly
          value={calc}
          ref={inputRef}
          onKeyDown={handleKeyDown(buttonClickHandlers)}
        />
        <div className="grid grid-cols-5 gap-3 w-full">
          {numpadButtons.map((button, index) => {
            const isDelButton = button.label === "DEL";
            return (
              <button
                key={index}
                className={`p-4 text-2xl text-white font-semibold ${
                  button.label === "="
                    ? "col-span-2 w-40 rounded-3xl bg-[#B2B2B2] text-black ml-5"
                    : button.type === "operator"
                    ? "bg-[#F49D1A] w-16 h-16 rounded-full ml-4"
                    : "bg-[#404258] rounded-3xl shadow-lg"
                }`}
                onClick={() => handleClick(button.onClick, button.value)}
              >
                {isDelButton ? (
                  <TiBackspace className="text-3xl m-auto" />
                ) : (
                  button.label
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
