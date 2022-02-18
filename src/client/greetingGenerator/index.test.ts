import { greetingGenerator } from ".";

test('logs "Hello World" to console', () => {
  expect(greetingGenerator()).toBe("Hello World!");
});
