import { render } from '@testing-library/react';
import { Home } from 'pages/Home';
import { MemoryRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

describe('test na pagina Home', () => {
  render(
    <Router>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </Router>
  );
});