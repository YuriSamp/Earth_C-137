import { render } from '@testing-library/react';
import { NavBar } from 'components/NavBar';
import { RecoilRoot } from 'recoil';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Teste Home', () => {
  test('Texto', () => {
    const { getByText } = render(
      <Router>
        <RecoilRoot>
          <NavBar />
        </RecoilRoot>
      </Router>
    );
    expect(getByText('Welcome to Earth C-137')).toBeTruthy();

  });
});