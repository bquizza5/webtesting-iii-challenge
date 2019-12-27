import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Dashboard from './dashboard'

// describe('<Dashboard/>', () => {
//     it('Matches snapshot', () => {
//         const tree = renderer.create(<Dashboard />);

//         expect(tree.toJSON()).toMatchSnapshot()
//     })
// })



describe("<Dashboard />", () => {
    it('the locked toggle button is disabled if the gate is open', () => {
        const { getByTestId, queryByText } = render(<Dashboard />)
        fireEvent.click(queryByText(/Lock Gate/i));
        expect(queryByText(/Lock Gate/i)).toBeTruthy()
        
    })
})

describe("<Dashboard />", () => {
    it('the closed toggle button is disabled if the gate is locked', () => {
        const { getByTestId, queryByText } = render(<Dashboard />)
        fireEvent.click(queryByText(/Close Gate/i));
        fireEvent.click(queryByText(/Lock Gate/i));
        fireEvent.click(queryByText(/Open Gate/i));
        expect(queryByText(/Closed/i)).toBeTruthy()
        
    })
})

describe("<Dashboard />", () => {
    it('clicking close gate will close the gate', () => {
        const { queryByText } = render(<Dashboard />)
        fireEvent.click(queryByText(/Close Gate/i));
        expect(queryByText(/Closed/i)).toBeTruthy()
        
    })
})

describe("<Dashboard />", () => {
    it('after clicking close gate, Lock Gate will work', () => {
        const { queryByText } = render(<Dashboard />)
        fireEvent.click(queryByText(/Close Gate/i));
        fireEvent.click(queryByText(/Lock Gate/i));
        expect(queryByText(/Locked/i)).toBeTruthy()
        
    })
})




