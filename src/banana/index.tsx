import React, { useState } from "react";
import EpilepsyWarning from "./components/EpilepsyWarning";
import Banana from "./components/Banana";

const BananaApp: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  return accepted ? (
    <Banana />
  ) : (
    <EpilepsyWarning continue={(): void => setAccepted(true)} />
  );
};

export default BananaApp;
