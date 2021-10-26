import { render, screen } from '@testin-library/React';
import { App } from './App';

test('renders the app with a button, a quote and a button', () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');
    const textEl = screen.getByText(/speaker/);

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
});