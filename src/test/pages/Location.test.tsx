import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Locations } from 'pages/Locations';
import { RecoilRoot } from 'recoil';


describe('Testando comportamento da pagina location', () => {

  it('ao clicar no botao de alterar a pagina', async () => {
    const user = userEvent.setup();
    render(
      <RecoilRoot>
        <Locations />
      </RecoilRoot>
    );

    const buttonNext = screen.getByText(/Next Page/i);
    expect(buttonNext).toBeTruthy;

    // await user.click(screen.getByText(/Next Page/i));
    // expect(screen.getByText(/Page 2/i)).toEqual(/Page 2/i);

    const buttonPrev = screen.getByText(/Prev Page/i);
    expect(buttonPrev).toBeTruthy;

  });
});