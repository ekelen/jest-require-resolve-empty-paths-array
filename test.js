test("should not throw with a valid absolute path", () => {
  expect(() => {
    require.resolve("/tmp/test");
  }).not.toThrow();
});

test("should not throw with a valid absolute path and a valid path in `paths` option", () => {
  expect(() => {
    require.resolve("/tmp/test", { paths: ["/"] });
  }).not.toThrow();
});

test("should not throw with a valid absolute path and an empty paths array option", () => {
  expect(() => require.resolve("/tmp/test", { paths: [] })).not.toThrow();
});

test("should locate an absolute filename if given empty paths array", () => {
  const explicitPath = require.resolve("/tmp/test");
  const implicitPath = require.resolve("/tmp/test", { paths: [] });
  expect(implicitPath).toEqual(explicitPath);
  expect(implicitPath).toEqual(expect.stringContaining("/tmp/test"));
});
