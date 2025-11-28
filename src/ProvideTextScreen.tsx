import React, { useCallback, useState, type SetStateAction } from "react";
import style from "./ProvideTextScreen.module.css";
import dudu_logo from "./images/dudu_favicon.jpg";

interface ProvideTextScreenProps {
  setRawText: React.Dispatch<SetStateAction<string | undefined>>;
}

const ProvideTextScreen = ({ setRawText }: ProvideTextScreenProps) => {
  const [inputtedText, setInputtedText] = useState<string>("");

  const handleInputText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputtedText(e.target.value);
    },
    []
  );

  return (
    <div className={style.provideTextScreenContainer}>
      <h1 className={style.provideTextScreenHeader}>Welcome to Dudu</h1>
      <p className={style.provideTextScreenDescription}>
        To begin, paste some Chinese text into the box below and click submit.
      </p>
      <textarea
        className={style.provideTextScreenTextArea}
        name="inputtedText"
        id="inputtedText"
        value={inputtedText}
        onChange={handleInputText}
        placeholder={"Paste your Chinese text here..."}
      ></textarea>
      <button
        disabled={inputtedText === ""}
        className={style.provideTextScreenButton}
        onClick={(e) => {
          e.preventDefault();
          if (inputtedText !== "") {
            setRawText(inputtedText);
          }
        }}
      >
        Let's Read!
      </button>
    </div>
  );
};

export default ProvideTextScreen;
