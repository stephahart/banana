import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import useTimedColorRandomizer from "../hooks/useTimedColorRandomizer";
import banana from "../assets/images/banana.png";

interface FunkyContainerProps {
  color: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FunkyContainer = styled.div<FunkyContainerProps>`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: FunkyContainerProps): string => props.color};
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BananaImage = styled.img`
  height: 80%;
`;

const Banana: React.FC = () => {
  const [colorInterval, setColorInterval] = useState(1000);
  const { color } = useTimedColorRandomizer(colorInterval);

  useEffect(() => {
    // Every 5 seconds, alternate between showing a new color every second and showing a new color every 100ms.
    const id = setInterval(
      () => setColorInterval((c) => (c === 100 ? 1000 : 100)),
      5000
    );

    // Cleanup function: This will get called when the component unmounts.
    return (): void => clearInterval(id);
  }, []);

  return (
    <FunkyContainer color={color}>
      <BananaImage src={banana} alt="Banana!" />
    </FunkyContainer>
  );
};

export default Banana;
