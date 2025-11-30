import { useMemo, useState } from "react";
import ReaderScreenToolBar from "./ReaderScreenToolBar";
import ReaderScreenPage from "./ReaderScreenPage";
import style from "./ReaderScreen.module.css";

interface ReaderScreenProps {
  rawText: string;
}

const punctuationMap = {
  " ": "\u3000", // ideographic space
  ",": "，",
  ".": "。",
  "...": "…",
  "!": "！",
  "?": "？",
  ":": "：",
  ";": "；",
  '"': "＂",
  "'": "＇",
  "(": "（",
  ")": "）",
  "[": "［",
  "]": "］",
  "{": "｛",
  "}": "｝",
  "<": "＜",
  ">": "＞",
  "-": "－",
  "–": "－",
  "—": "－",
  "/": "／",
  "\\": "＼",
  "+": "＋",
  "=": "＝",
  "*": "＊",
  "&": "＆",
  "%": "％",
  $: "＄",
  "#": "＃",
  "@": "＠",
  "~": "～",
  "^": "＾",
  "|": "｜",
  "`": "｀",
} as const;

const tokenRegex =
  /([A-Za-z]+)|([\u4E00-\u9FFF])|([0-9]+)|([\u3000-\u303F\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65.,!?;:"'()[\]<>/—\-、。「」『』])|(\s+)/g;

type PunctuationKey = keyof typeof punctuationMap;

export type Token =
  | { type: "english"; value: string }
  | { type: "chinese"; value: string }
  | { type: "number"; value: string }
  | { type: "punct"; value: string }
  | { type: "space"; value: string };

const toFullWidth = (c: string): string => {
  if (c in punctuationMap) {
    return punctuationMap[c as PunctuationKey];
  }

  return c;
};

const tokenizeRawText = (rawText: string): Token[] => {
  const tokens: Token[] = [];
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(rawText)) !== null) {
    const raw = match[0];
    if (match[1]) {
      tokens.push({ type: "english", value: raw });
    } else if (match[2]) {
      tokens.push({ type: "chinese", value: raw });
    } else if (match[3]) {
      tokens.push({ type: "number", value: raw });
    } else if (match[4]) {
      tokens.push({ type: "punct", value: raw });
    } else if (match[5]) {
      tokens.push({ type: "space", value: raw });
    }
  }

  const fullWidthTypes = new Set(["punct", "space"] as const);
  const fullWidthTokens = tokens.map((token) => {
    return {
      ...token,
      value: fullWidthTypes.has(token.type as "punct" | "space")
        ? toFullWidth(token.value)
        : token.value,
    };
  });

  return fullWidthTokens;
};

const ReaderScreen = ({ rawText }: ReaderScreenProps) => {
  // Begin by tokenizing the input rawText into individual "tokens"
  const tokens = useMemo(() => {
    return tokenizeRawText(rawText);
  }, [rawText]);

  const [columnGap, setColumnGap] = useState<number>(0);
  const [rowGap, setRowGap] = useState<number>(15);
  const [readerWidth, setReaderWidth] = useState<number>(60);
  const [fontSize, setFontSize] = useState<number>(36);

  return (
    <div className={style.readerScreenContainer}>
      <ReaderScreenPage
        tokens={tokens}
        columnGap={columnGap}
        rowGap={rowGap}
        readerWidth={readerWidth}
        fontSize={fontSize}
      />
      <ReaderScreenToolBar
        setColumnGap={setColumnGap}
        setRowGap={setRowGap}
        setReaderWidth={setReaderWidth}
        setFontSize={setFontSize}
      />
    </div>
  );
};

export default ReaderScreen;
