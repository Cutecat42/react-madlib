const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("1000 to equal 1,000", () => {
    expect(addCommas(1000)).toBe("1,000");
  });
  test("-1000 to equal -1,000", () => {
    expect(addCommas(-1000)).toBe("-1,000");
  });
  test("9876543210 to equal 9,876,543,210", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });
  test("-56784 to equal -56,784", () => {
    expect(addCommas(-56784)).toBe("-56,784");
  });
});
