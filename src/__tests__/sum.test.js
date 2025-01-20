import Sum from "../sum";

test("test the sum fucntion", () => {
  const result = Sum(3,4);
  // assertion
  expect(result).toBe(7);
});
