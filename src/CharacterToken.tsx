import styles from "./CharacterToken.module.css";

interface CharacterTokenProps {
  isEnglishLike: boolean;
  value: string;
  fontSize: number; // In px
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
  isEnglishLike,
  value,
  fontSize,
}: CharacterTokenProps) => {
  const fontFamily = "Segoe UI"; // Hardcode this for now.
  const cellWidth = fontSize * 1.1;

  if (isEnglishLike) {
    const tokenWidth = calculateTokenWidth(value, fontSize, fontFamily);
    let cellValue;
    if (tokenWidth === undefined) {
      cellValue = "？";
    } else {
      cellValue = value;
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

  return (
    <span
      className={styles.cell}
      style={{
        fontSize: fontSize,
      }}
    >
      {value}
    </span>
  );
};

export default CharacterToken;
