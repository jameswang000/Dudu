import "react";
import { useState } from "react";
import ProvideTextScreen from "./ProvideTextScreen";
import ReaderScreen from "./ReaderScreen";

function App() {
  const [rawText, setRawText] = useState<string | undefined>(undefined);

  if (rawText === undefined) {
    return <ProvideTextScreen setRawText={setRawText} />;
  }

  return <ReaderScreen rawText={rawText} />;
}

export default App;
