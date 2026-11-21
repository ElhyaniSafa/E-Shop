import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the product list', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  );

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByText('Nos produits')).toBeInTheDocument();
});
