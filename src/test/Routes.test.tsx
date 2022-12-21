import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rotas } from 'Routes';

describe('Verificando as Rotas', () => {

  test('Testando as rotas', async () => {
    const user = userEvent.setup();
    render(
      <Rotas />
    );

    await user.click(screen.getByText(/Characters/i));
    expect(screen.getByText(/the rick and morty tracker/i)).toBeTruthy();

    await user.click(screen.getByText(/Locations/i));
    expect(screen.getByText(/did you get any of that/i)).toBeTruthy();

  });
});