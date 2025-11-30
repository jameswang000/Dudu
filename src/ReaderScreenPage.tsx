import CharacterToken from "./CharacterToken";
import type { Token } from "./ReaderScreen";
import styles from "./ReaderScreenPage.module.css";

interface ReaderScreenPageProps {
  tokens: Token[];
  columnGap: number;
  rowGap: number;
  readerWidth: number;
  fontSize: number;
}

const ReaderScreenPage = ({
  tokens,
  columnGap,
  rowGap,
  readerWidth,
  fontSize,
}: ReaderScreenPageProps) => {
  const tokenComponents = tokens.map(({ type, value }) => {
    let isEnglishLike;
    if (type === "english" || type === "number") {
      isEnglishLike = true;
    } else {
      isEnglishLike = false;
    }

    return (
      <CharacterToken
        isEnglishLike={isEnglishLike}
        value={value}
        fontSize={fontSize}
      />
    );
  });

  const cellWidth = fontSize * 1.1;
  return (
    <div
      className={styles.readerScreenPageGrid}
      style={{
        rowGap: rowGap,
        columnGap: columnGap,
        width: `${readerWidth}%`,
        gridTemplateColumns: `repeat(auto-fit, ${cellWidth}px)`,
        gridTemplateRows: `repeat(auto-fit, ${cellWidth}px)`,
      }}
    >
      {tokenComponents}
    </div>
  );
};

export default ReaderScreenPage;
