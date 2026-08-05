// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactPage } from "@/routes/contact";
import { ErrorComponent, NotFoundComponent } from "@/routes/__root";
import { renderWithRouter } from "@/test/render-with-router";

afterEach(cleanup);

describe("ContactPage", () => {
  it("shows validation errors without opening an email client", async () => {
    const user = userEvent.setup();
    await renderWithRouter(<ContactPage />);

    await user.click(screen.getByRole("button", { name: "Open email to send" }));
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please enter your name (up to 100 characters).",
    );

    await user.type(screen.getByRole("textbox", { name: "Name" }), "Test User");
    await user.click(screen.getByRole("button", { name: "Open email to send" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid email address.");
  });
});

describe("route states", () => {
  it("renders a useful not-found state", async () => {
    await renderWithRouter(<NotFoundComponent />, "/missing");

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go home" })).toHaveAttribute("href", "/");
  });

  it("renders the recovery action for unexpected errors", async () => {
    const reset = vi.fn();
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);
    await renderWithRouter(<ErrorComponent error={new Error("test failure")} reset={reset} />);

    expect(screen.getByRole("heading", { name: "This page didn't load" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(reset).toHaveBeenCalledOnce();

    consoleError.mockRestore();
  });
});
