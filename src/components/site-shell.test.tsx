// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { renderWithRouter } from "@/test/render-with-router";

afterEach(cleanup);

describe("SiteHeader", () => {
  it("exposes the primary navigation destinations", async () => {
    await renderWithRouter(<SiteHeader />);

    const expectedLinks = {
      Home: "/",
      Products: "/products",
      About: "/about",
      Support: "/support",
      Privacy: "/privacy",
      Contact: "/contact",
    };

    for (const [name, href] of Object.entries(expectedLinks)) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("reports and updates the mobile menu state", async () => {
    const user = userEvent.setup();
    await renderWithRouter(<SiteHeader />);
    const toggle = screen.getByRole("button", { name: "Toggle menu" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", "mobile-navigation");
    expect(document.querySelector("#mobile-navigation")).not.toBeInTheDocument();

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(document.querySelector("#mobile-navigation")).toBeInTheDocument();
  });
});

describe("SiteFooter", () => {
  it("uses verified GitHub and same-tab email destinations", async () => {
    await renderWithRouter(<SiteFooter />);

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/kbyunghak/JOYgleStudio",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:joygle.dev@gmail.com",
    );
    expect(screen.getByRole("link", { name: "Email" })).not.toHaveAttribute("target");
  });
});
