import styled from "@emotion/styled";
import React from "react";
import { Button } from "@material-ui/core";

interface FunkyContainerProps {
  color: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Title = styled.h1`
  font-size: 45px;
  margin: 2rem 1rem 1rem;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const P = styled.p`
  font-size: 14px;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem !important;
  margin-bottom: 2rem !important;
`;

interface EpilepsyWarningProps {
  continue: () => void;
}

const EpilepsyWarning: React.FC<EpilepsyWarningProps> = (props) => (
  <Container>
    <Title>EPILEPSY WARNING</Title>
    <P>
      The following webpage contains flashing colors and fast-paced animations
      that may triggers seizures.
    </P>
    <StyledButton onClick={props.continue} variant="outlined">
      Continue
    </StyledButton>
  </Container>
);

export default EpilepsyWarning;
