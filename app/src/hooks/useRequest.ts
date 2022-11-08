import { IFiltro } from 'interfaces/Filtro';
import { http } from 'util/http';

async function useRequest(FiltroSpecies: string, FiltroStatus: string, Nome: string, Page: number): Promise<IFiltro | undefined> {
  if (FiltroSpecies === '' && FiltroStatus === '' && Nome === '') {
    const resposta = await http.get(`character/?page=${Page}`);
    return resposta.data;
  }

  if (FiltroSpecies !== '' && FiltroStatus === '' && Nome === '') {
    const resposta = await http.get<IFiltro>(`character/?species=${FiltroSpecies}&page=${Page}`);
    return resposta.data;
  }

  if (FiltroStatus !== '' && FiltroSpecies === '' && Nome === '') {
    const resposta = await http.get<IFiltro>(`character/?status=${FiltroStatus}&page=${Page}`);
    return resposta.data;
  }

  if (FiltroSpecies !== '' && FiltroStatus !== '' && Nome === '') {
    const resposta = await http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&page=${Page}`);
    return resposta.data;
  }

  if (FiltroSpecies !== '' && FiltroStatus !== '' && Nome !== '') {
    const resposta = await http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&name=${Nome}&page=${Page}`);
    return resposta.data;
  }

  if (Nome !== '' && FiltroSpecies === '' && FiltroStatus === '') {
    const resposta = await http.get<IFiltro>(`character/?name=${Nome}&page=${Page}`);
    return resposta.data;
  }

  if (Nome !== '' && FiltroSpecies !== '' && FiltroStatus === '') {
    const resposta = await http.get<IFiltro>(`character/?name=${Nome}&species=${FiltroSpecies}&page=${Page}`);
    return resposta.data;
  }

  if (Nome !== '' && FiltroSpecies === '' && FiltroStatus !== '') {
    const resposta = await http.get<IFiltro>(`character/?name=${Nome}&status=${FiltroStatus}&page=${Page}`);
    return resposta.data;
  }

}

export default useRequest;
