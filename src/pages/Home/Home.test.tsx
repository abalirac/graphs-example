
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe('Home page', () => {
    it('should show a welcome text', () => {
        render(<Home />)
        expect(screen.findAllByText('Welcome to graphs test app')).toBeTruthy();
    });
});