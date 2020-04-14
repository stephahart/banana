import React from "react";
import { render } from "@testing-library/react";
import Banana from "..";

test("renders the banana", () => {
  const { getByAltText } = render(<Banana />);
  const banana = getByAltText("Banana!");
  expect(banana).toBeInTheDocument();
});
