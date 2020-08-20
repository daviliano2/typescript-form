import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("renders the App component", () => {
  const { getByText } = render(<App />);
  const firstLabel = getByText("Form Inputs");

  expect(firstLabel).toBeInTheDocument();
});

test("adds 2 inputs to the form", async () => {
  render(<App />);

  userEvent.type(screen.getByLabelText("Form Inputs"), "position,age");
  userEvent.click(screen.getByText("Add Inputs"));

  //? If the test passes it means that the element was found.
  //? If `screen.findByText("element")` cannot find the element it will timeout
  //? and the logs will show the test as failed.
  await screen.findByText("position");
  await screen.findByText("age");

  //? Another way of writing this test would be like in the lines below
  //? but I am not sure which one is the best approach:
  // const firstLabel = await screen.findByText("position");
  // const secondLabel = await screen.findByText("age");
  // expect(firstLabel).toBeInTheDocument();
  // expect(secondLabel).toBeInTheDocument();
});

test("writes into the new input and submits the form", async () => {
  render(<App />);

  userEvent.type(screen.getByLabelText("Form Inputs"), "position");
  userEvent.click(screen.getByText("Add Inputs"));

  await screen.findByText("position");

  userEvent.type(screen.getByLabelText("position"), "developer");
  userEvent.click(screen.getByText("Submit"));
  await screen.findByText("position - developer");
});

test("writes wrong name and validation error is shown", async () => {
  render(<App />);

  userEvent.type(screen.getByLabelText("name"), "max");
  await screen.findByText(
    "Name must start with 'wooga.' and contain 2 or more characters."
  );
});

test("writes valid name and is able to submit", async () => {
  render(<App />);

  userEvent.type(screen.getByLabelText("name"), "wooga.max");
  userEvent.click(screen.getByText("Submit"));
  await screen.findByText("name - wooga.max");
});
