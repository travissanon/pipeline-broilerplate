import rollbar from "../../../rollbar";

export function greetingGenerator() {
  rollbar.error("Hello, this is an error");
  return "Hello World!";
}
