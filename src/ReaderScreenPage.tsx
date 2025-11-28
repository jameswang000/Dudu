import CharacterToken from "./CharacterToken";
import type { Token } from "./ReaderScreen";

interface ReaderScreenPageProps {
  tokens: Token[];
  columnGap: number;
  rowGap: number;
  readerWidth: number;
}

const ReaderScreenPage = ({
  tokens,
  columnGap,
  rowGap,
  readerWidth,
}: ReaderScreenPageProps) => {
  const tokenComponents = tokens.map(({ type, value }) => {
    let isEnglishLike;
    if (type === "english" || type === "number") {
      isEnglishLike = true;
    } else {
      isEnglishLike = false;
    }

    return <CharacterToken isEnglishLike={isEnglishLike} value={value} />;
  });
  return <div>{tokenComponents}</div>;
};

export default ReaderScreenPage;
