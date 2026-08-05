import { describe, expect, it } from "vitest";
import { buildContactMailto, validateContactFields } from "./contact";

const validFields = {
  name: "Test User",
  email: "test@example.com",
  message: "Hello JOYgle Studio!",
};

describe("validateContactFields", () => {
  it("accepts a complete valid inquiry", () => {
    expect(validateContactFields(validFields)).toBeNull();
  });

  it.each([
    [{ ...validFields, name: "" }, "Please enter your name (up to 100 characters)."],
    [{ ...validFields, email: "invalid" }, "Please enter a valid email address."],
    [{ ...validFields, message: "" }, "Please enter a message (up to 1000 characters)."],
  ])("rejects invalid fields", (fields, expectedMessage) => {
    expect(validateContactFields(fields)).toBe(expectedMessage);
  });
});

describe("buildContactMailto", () => {
  it("trims and safely encodes the inquiry", () => {
    const mailto = buildContactMailto({
      name: "  Test User  ",
      email: "  test@example.com  ",
      message: "  Hello & welcome  ",
    });

    expect(mailto).toBe(
      "mailto:joygle.dev@gmail.com?subject=JOYgle%20Studio%20inquiry%20from%20Test%20User&body=Hello%20%26%20welcome%0A%0A%E2%80%94%20Test%20User%20(test%40example.com)",
    );
  });
});
