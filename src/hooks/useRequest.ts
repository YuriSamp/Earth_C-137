import { IFiltro } from 'interfaces/Filtro';
import { http } from 'util/http';

async function useRequest(
  FiltroSpecies: string,
  FiltroStatus: string,
  Nome: string,
  Page: number
): Promise<IFiltro | undefined> {
  let queryString = Nome !== '' ? `name=${Nome}&` : '';
  queryString += FiltroSpecies !== '' ? `species=${FiltroSpecies}&` : '';
  queryString += FiltroStatus !== '' ? `status=${FiltroStatus}&` : '';
  queryString += `page=${Page}`;
  const resposta = await http.get<IFiltro>(`character/?${queryString}`);
  return resposta.data;
}

export default useRequest;
