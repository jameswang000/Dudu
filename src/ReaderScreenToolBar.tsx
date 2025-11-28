import React, { type SetStateAction } from "react";

interface ReaderScreenToolBarProps {
  setColumnGap: React.Dispatch<SetStateAction<number>>;
  setRowGap: React.Dispatch<SetStateAction<number>>;
  setReaderWidth: React.Dispatch<SetStateAction<number>>;
}

const ReaderScreenToolBar = ({
  setColumnGap,
  setRowGap,
  setReaderWidth,
}: ReaderScreenToolBarProps) => {
  return <div></div>;
};

export default ReaderScreenToolBar;
