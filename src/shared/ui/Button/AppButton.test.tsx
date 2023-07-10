import { render, screen } from "@testing-library/react";
import AppButton from "shared/ui/Button/AppButton";

describe("просто тест", () => {
  test("рендер тест", () => {
    render(<AppButton>AppButton</AppButton>);
    expect(screen.getByText("AppButton")).toBeInTheDocument();
  });

  test("атрибуты", () => {
    render(<AppButton type="submit">AppButton</AppButton>);
    expect(screen.getByTestId("button")).toHaveAttribute("type", "submit");
    expect(screen.getByTestId("button")).not.toHaveAttribute("type", "button");
    screen.debug();
  });
});
