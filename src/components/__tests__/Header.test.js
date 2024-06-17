import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // This is one way to find login button
  // This is good way ⬇
  //   const loginButton = screen.getByRole("button");
  //   If you have lots of button and you want to find some specific button so write like this ⬇
  const loginButton = screen.getByRole("button", { name: "Login" });

  // This is not good way ⬇ If you can't find by Role than and only than do with this
  // const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("should render Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    // This is one way to find login button
    // This is good way ⬇
    //   const loginButton = screen.getByRole("button");
    //   If you have lots of button and you want to find some specific button so write like this ⬇
    const loginButton = screen.getByRole("button", { name: "Login" });
  
    // This is not good way ⬇ If you can't find by Role than and only than do with this
    // const loginButton = screen.getByText("Login");
  
    expect(loginButton).toBeInTheDocument();
});
