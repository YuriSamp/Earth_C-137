import { render, screen } from '@testing-library/react';
import useRequest from 'hooks/useRequest';

const mockUseRequest = vitest.fn();
vitest.mock('hooks/useRequest', () => [{ useRequest: () => mockUseRequest }]);

describe('comportamento dos filtros', () => {

  test('ao não ter nenhum filtro deve listar todos os personagens', () => {
    mockUseRequest.mockReturnValue;
  });
});