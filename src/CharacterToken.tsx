import { type SetStateAction } from "react";
import CharacterInformationPopup from "./CharacterInformationPopup";
import styles from "./CharacterToken.module.css";
import type { Token } from "./ReaderScreen";

interface CharacterTokenProps {
  token: Token;
  fontSize: number; // In px
  selectedIndex: number | undefined;
  setSelectedIndex: React.Dispatch<SetStateAction<number | undefined>>;
}

const calculateTokenWidth = (
  text: string,
  fontSize: number,
  fontFamily: string
): number | undefined => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.font = `${fontSize}px ${fontFamily}`;
    return ctx.measureText(text).width;
  }
  return undefined;
};

const CharacterToken = ({
  token,
  fontSize,
  selectedIndex,
  setSelectedIndex,
}: CharacterTokenProps) => {
  const fontFamily = "Segoe UI"; // Hardcode this for now.
  const cellWidth = fontSize;
  const isSelected = selectedIndex === token.index;

  if (token.type === "english" || token.type === "number") {
    const tokenWidth = calculateTokenWidth(token.value, fontSize, fontFamily);
    let cellValue;
    if (tokenWidth === undefined) {
      cellValue = "？";
    } else {
      cellValue = token.value;
    }
    const numCells =
      tokenWidth === undefined ? 0 : Math.ceil(tokenWidth / cellWidth);
    return (
      <span
        className={styles.inlineWord}
        style={{
          fontSize: fontSize,
          gridColumn: `span ${numCells}`,
        }}
      >
        {cellValue}
      </span>
    );
  }

  if (token.type === "lineBreak") {
    return (
      <span
        style={{
          gridColumn: "1 / -1",
        }}
      ></span>
    );
  }

  return (
    <div
      className={
        token.type === "chinese" ? styles.characterTokenCellContainer : ""
      }
      style={{
        position: "relative",
      }}
    >
      <span
        onClick={() => {
          if (isSelected) {
            setSelectedIndex(undefined);
          } else {
            setSelectedIndex(token.index);
          }
        }}
        className={styles.cell}
        style={{
          fontSize: fontSize,
        }}
      >
        {token.value}
      </span>
      {token.type === "chinese" && isSelected ? (
        <CharacterInformationPopup cellWidth={cellWidth} />
      ) : undefined}
    </div>
  );
};

export default CharacterToken;
