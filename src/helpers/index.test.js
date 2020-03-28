import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  let letterMatchCount;

  test("returns correct count when there are no matching letters", () => {
    letterMatchCount = getLetterMatchCount("zulus", secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test("returns the correct count when there are 3 matching letters", () => {
    letterMatchCount = getLetterMatchCount("tapes", secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test("returns correct count when there are duplicate letters in the guess ", () => {
    letterMatchCount = getLetterMatchCount("apart", secretWord);
    expect(letterMatchCount).toBe(4);
  });
});
