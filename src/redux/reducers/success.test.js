import { actionTypes } from "../actions";
import success from "./success";

describe("success reducer", () => {
  test("returns default initial state of `false` when no action", () => {
    const newState = success(undefined, {});
    expect(newState).toBe(false);
  });

  test("return state of `true` when ab action of type `CORRECT_GUESS`", () => {
    const newState = success(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
  });
});
