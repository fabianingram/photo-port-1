import React from 'react';
// The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

// The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";
// jest-dom offers access to custom matchers that are used to test DOM elements. 
import '@testing-library/jest-dom/extend-expect';
// Next we'll import the component we will be testing, which is the About component.
import About from '..';

// afterEach(cleanup) will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

// Then we'll use the describe function to declare the component we're testing,
describe('About component', () => {
    // First Test will be the baseline to verify that the component is rendering.
    it('renders', () => {
        render(<About />);
    });
    // Second Test - we'll test and compare whether the expected and actual outcomes match. Use the expect function with a matcher to assert something about a value. In the following statement, we'll use the toMatchSnapshot matcher to assert that snapshots will match
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})