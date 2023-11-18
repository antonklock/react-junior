import { useState, useEffect } from "react";

type GameButtonProps = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  status: "correct" | "incorrect" | "unanswered" | "selected";
};

export const GameButton = (props: GameButtonProps) => {
  const { text, onClick, status } = props;

  const [disabled, setDisabled] = useState(false);

  const [buttonStatus, setbuttonStatus] = useState<
    "correct" | "incorrect" | "unanswered" | "selected"
  >(status);

  const styleUnanswered = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-100`;
  const styleSelected = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50`;
  const styleIncorrect = `bg-red-500 text-white font-bold py-2 px-4 rounded opacity-50`;
  const styleCorrect = `bg-green-500 text-white font-bold py-2 px-4 rounded opacity-0`;
  const [buttonStyle, setButtonStyle] = useState(styleUnanswered);

  useEffect(() => {
    if (status === "selected") {
      setButtonStyle(styleSelected);
      setDisabled(true);
    } else if (status === "correct") {
      setButtonStyle(styleCorrect);
      setDisabled(true);
    } else if (status === "incorrect") {
      setButtonStyle(styleIncorrect);
      setDisabled(true);
    } else {
      console.log("unanswered");
      setButtonStyle(styleUnanswered);
      setDisabled(false);
    }
  }, [status, styleCorrect, styleIncorrect, styleSelected, styleUnanswered]);

  return (
    <div>
      <button disabled={disabled} className={buttonStyle} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
