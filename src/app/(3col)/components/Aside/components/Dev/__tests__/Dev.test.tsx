import Dev from "@/app/(3col)/components/Aside/components/Dev";
import { render, screen } from "@/lib/utils/test";

describe("Dev Component", () => {
  test("should render the Github link", () => {
    render(<Dev />);
    const link = screen.getByRole("link", { name: "github" });
    expect(link).toBeVisible();
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/GentaAmeku/x-clone",
    );
    expect(link).toHaveAttribute("target", "_blank");
  });

  test("should render the Github Icon", () => {
    render(<Dev />);
    expect(screen.getByRole("link", { name: "github" })).toContainHTML("<svg");
  });
});
