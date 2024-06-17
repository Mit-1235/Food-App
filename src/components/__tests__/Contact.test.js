import React from "react";

import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {

    // you can use it or test both are same that is elias of each other

    it("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
        
    });
    
    it("should load button inside Contact component", () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    test("should load input name inside Contact component", () => {
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("Name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    test("should load 2 input boxes on the Contact component", () => {
    
        // Render
        render(<Contact/>);
    
        //  this type of role does not exist
        // const inputBoxes = screen.getByRole("input");
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        // console.log(inputBoxes);
        // console.log(inputBoxes[0]);
        // console.log(inputBoxes.length);
    
        // Assertion
        // expect(inputBoxes.length).not.toBe(3);
        // expect(inputBoxes.length).toBeTruthy();
        expect(inputBoxes.length).toBe(2);
    
    });
});

