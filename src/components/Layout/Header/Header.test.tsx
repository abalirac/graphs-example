import Header from "./Header";
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Header component', () => {
    it('renders correctly', () => {
        render(<Router><Header /></Router>);
    });

    test('image alt contains correct value', () => {
        render(<Router><Header /></Router>)
        const testImage = document.querySelector("img") as HTMLImageElement;
        expect(testImage.alt).toContain("Logo");
    })
});
