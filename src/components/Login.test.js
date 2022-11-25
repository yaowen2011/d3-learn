import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import Login from './Login'

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      id: 1, name: 'john'
    })
  }
}))

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
})
test("password input should be rendered", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
})
test("button input should be rendered", () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
})
test("username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.nodeValue).toBeNull();
})
test("button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
})
test("button should be not loading by default", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/loading/i);
})
test("button should be loading when clicked", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const buttonEl = screen.getByRole("button")

  const testValue = "test"
  fireEvent.change(usernameInputEl, { target: { value: testValue } })
  fireEvent.change(passwordInputEl, { target: { value: testValue } })
  fireEvent.click(buttonEl)

  expect(buttonEl).toHaveTextContent(/loading/i);
})

test("Error message should be invisible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
})
test("username input should be changed", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test"

  fireEvent.change(userInputEl, { target: { value: testValue } })
  expect(userInputEl.value).toBe(testValue);
})
test("password input should be changed", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test"
  fireEvent.change(passwordInputEl, { target: { value: testValue } })

  expect(passwordInputEl.value).toBe(testValue);
})

test("button should not be disabled when inputs exists", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const buttonEl = screen.getByRole("button")

  const testValue = "test"
  fireEvent.change(usernameInputEl, { target: { value: testValue } })
  fireEvent.change(passwordInputEl, { target: { value: testValue } })

  expect(buttonEl).not.toBeDisabled();
})
test("loading should not be rendered after fetching", async () => {

  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const buttonEl = screen.getByRole("button")

  const testValue = "test"

  fireEvent.change(usernameInputEl, { target: { value: testValue } })
  fireEvent.change(passwordInputEl, { target: { value: testValue } })

  fireEvent.click(buttonEl)


  await waitForElementToBeRemoved(() => {expect(buttonEl).toHaveTextContent(/login/i)})
})