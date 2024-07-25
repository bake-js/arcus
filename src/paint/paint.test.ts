import { beforeEach, describe, expect, it } from "bun:test";
import trait from "../trait";
import paint from "./paint";

describe("paint", () => {
  let element: Element;
  let lifecycle: string[];

  function component() {
    lifecycle.push("component");
    return "<div />";
  }

  @paint(component)
  class Element {
    connectedCallback() {
      lifecycle.push("connectedCallback");
      return this;
    }

    [trait.didPaintCallback]() {
      lifecycle.push("didPaint");
      return this;
    }

    [trait.willPaintCallback]() {
      lifecycle.push("willPaint");
      return this;
    }
  }

  beforeEach(() => {
    element = new Element();
    lifecycle = [];
  });

  it("Executa o ciclo de vida do component apos o evento connectedCallback", async () => {
    expect(element.innerHTML).toBeUndefined();

    await element.connectedCallback();

    expect(lifecycle).toEqual([
      "connectedCallback",
      "willPaint",
      "component",
      "didPaint",
    ]);

    expect(element.innerHTML).toBe("<div />");
  });
});
