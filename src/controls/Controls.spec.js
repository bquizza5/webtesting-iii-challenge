import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Controls from './controls'

describe("<Controls />", () => {
    it('default should be lock and close', () => {
        const { getByTestId, queryByText } = render(<Controls />)
        expect(queryByText(/Lock Gate/i)).toBeTruthy()
        expect(queryByText(/Close Gate/i)).toBeTruthy()
    })
})

describe("<Controls />", () => {
    it("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
        let closed = true

        const { getByText } = render(<Controls closed={closed} />);

        expect(getByText(/Open Gate/i)).toBeTruthy()
    })
})

describe("<Controls />", () => {
    it("displays 'Open' if the closed prop is true and 'Closed' if otherwise", () => {
        let closed = false

        const { getByText } = render(<Controls closed={closed} />);

        expect(getByText(/Close Gate/i)).toBeTruthy()
    })
})


