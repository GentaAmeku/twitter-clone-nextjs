import { type RenderOptions, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppProvider } from "@/lib/store";
import type { ReactElement } from "react";

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(<AppProvider>{ui}</AppProvider>, options);

export * from "@testing-library/react";

export { customRender as render };
