import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Display from './display'

describe("<Display />", () => {
    it('default should be unlocked and open', () => {
        const { getByTestId, queryByText } = render(<Display />)
        expect(queryByText(/Unlocked/i)).toBeTruthy()
        expect(queryByText(/Open/i)).toBeTruthy()
    })
})