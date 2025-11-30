import React, { type SetStateAction } from "react";

interface ReaderScreenToolBarProps {
  setColumnGap: React.Dispatch<SetStateAction<number>>;
  setRowGap: React.Dispatch<SetStateAction<number>>;
  setReaderWidth: React.Dispatch<SetStateAction<number>>;
  setFontSize: React.Dispatch<SetStateAction<number>>;
}

const ReaderScreenToolBar = ({
  setColumnGap,
  setRowGap,
  setReaderWidth,
  setFontSize,
}: ReaderScreenToolBarProps) => {
  return <div></div>;
};

export default ReaderScreenToolBar;
