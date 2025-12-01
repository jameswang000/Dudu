import { useEffect, useRef, useState } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideGrid = (event: MouseEvent) => {
      if (!gridRef.current) {
        // Grid currently not associated with a ref, nonsensical state
        return;
      }

      if (!gridRef.current.contains(event.target as Node)) {
        setSelectedIndex(undefined);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideGrid);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideGrid);
    };
  }, []);

  const tokenComponents = tokens.map((token) => {
    return (
      <CharacterToken
        key={token.index}
        token={token}
        fontSize={fontSize}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    );
  });

  const cellWidth = fontSize * 1.1;
  return (
    <div
      ref={gridRef}
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
