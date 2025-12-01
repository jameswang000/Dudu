import React, { type SetStateAction } from "react";
import styles from "./ReaderScreenToolBar.module.css";

interface ReaderScreenToolBarProps {
  setColumnGap: React.Dispatch<SetStateAction<number>>;
  setRowGap: React.Dispatch<SetStateAction<number>>;
  setReaderWidth: React.Dispatch<SetStateAction<number>>;
  setFontSize: React.Dispatch<SetStateAction<number>>;
  setRawText: React.Dispatch<SetStateAction<string | undefined>>;
}

const ReaderScreenToolBar = ({
  setColumnGap,
  setRowGap,
  setReaderWidth,
  setFontSize,
  setRawText,
}: ReaderScreenToolBarProps) => {
  return (
    <div className={styles.readerScreenToolBarContainer}>
      <button
        className={styles.readerScreenToolBarBackButton}
        onClick={() => {
          setRawText(undefined);
        }}
      >
        Back
      </button>
      <div className={styles.readerScreenToolBarControlContainer}>
        <button
          className={styles.readerScreenToolBarControlButton}
          onClick={() => {
            setRowGap((rowGap) => {
              if (rowGap - 5 >= 0) {
                return rowGap - 5;
              } else {
                return rowGap;
              }
            });
          }}
        >
          -
        </button>
        <p className={styles.readerScreenToolBarControlLabel}>Line Spacing</p>
        <button
          className={styles.readerScreenToolBarControlButton}
          onClick={() => {
            setRowGap((rowGap) => {
              if (rowGap + 5 <= 50) {
                return rowGap + 5;
              } else {
                return rowGap;
              }
            });
          }}
        >
          +
        </button>
      </div>
      <div className={styles.readerScreenToolBarControlContainer}>
        <button
          className={styles.readerScreenToolBarControlButton}
          onClick={() => {
            setColumnGap((columnGap) => {
              if (columnGap - 5 >= 0) {
                return columnGap - 5;
              } else {
                return columnGap;
              }
            });
          }}
        >
          -
        </button>
        <p className={styles.readerScreenToolBarControlLabel}>
          Character Spacing
        </p>
        <button
          className={styles.readerScreenToolBarControlButton}
          onClick={() => {
            setColumnGap((columnGap) => {
              if (columnGap + 5 <= 20) {
                return columnGap + 5;
              } else {
                return columnGap;
              }
            });
          }}
        >
          +
        </button>
      </div>
      <div className={styles.readerScreenToolBarControlContainer}>
        <button
          className={styles.readerScreenToolBarControlButton}
          onClick={() => {
            setReaderWidth((readerWidth) => {
              if (readerWidth - 5 >= 40) {
                return readerWidth - 5;
              } else {
                return readerWidth;
              }
            });
          }}
        >
          -
        </button>
        <p className={styles.readerScreenToolBarControlLabel}>Page Width</p>
        <button
          className={styles.readerScreenToolBarControlButton}
          onClick={() => {
            setReaderWidth((readerWidth) => {
              if (readerWidth + 5 <= 100) {
                return readerWidth + 5;
              } else {
                return readerWidth;
              }
            });
          }}
        >
          +
        </button>
      </div>
      <div className={styles.readerScreenToolBarControlContainer}>
        <button
          className={styles.readerScreenToolBarControlButton}
          onClick={() => {
            setFontSize((fontSize) => {
              if (fontSize - 1 >= 16) {
                return fontSize - 1;
              } else {
                return fontSize;
              }
            });
          }}
        >
          -
        </button>
        <p className={styles.readerScreenToolBarControlLabel}>Font Size</p>
        <button
          className={styles.readerScreenToolBarControlButton}
          onClick={() => {
            setFontSize((fontSize) => {
              if (fontSize + 1 <= 36) {
                return fontSize + 1;
              } else {
                return fontSize;
              }
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ReaderScreenToolBar;
