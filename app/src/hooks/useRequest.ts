import { IFiltro } from 'interfaces/Filtro';
import { http } from 'util/http';

async function useRequest(FiltroSpecies: string, FiltroStatus: string, Nome: string, Page: number): Promise<IFiltro | undefined> {

  if (FiltroSpecies === '' && FiltroStatus === '' && Nome === '') {
    try {
      const resposta = await http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&page=${Page}`);
      return resposta.data;
    } catch (error) {
      return undefined;
    }
  }

  if (FiltroSpecies !== '' && FiltroStatus === '' && Nome === '') {
    try {
      const resposta = await http.get<IFiltro>(`character/?species=${FiltroSpecies}&page=${Page}`);
      return resposta.data;
    } catch (error) {
      return undefined;
    }
  }

  if (FiltroStatus !== '' && FiltroSpecies === '' && Nome === '') {
    try {
      const resposta = await http.get<IFiltro>(`character/?status=${FiltroStatus}&page=${Page}`);
      return resposta.data;
    } catch (error) {
      return undefined;
    }
  }

  if (FiltroSpecies !== '' && FiltroStatus !== '' && Nome === '') {
    try {
      const resposta = await http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&page=${Page}`);
      return resposta.data;
    } catch (error) {
      return undefined;
    }
  }

  if (FiltroSpecies !== '' && FiltroStatus !== '' && Nome !== '') {
    try {
      const resposta = await http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&name=${Nome}&page=${Page}`);
      return resposta.data;
    } catch (error) {
      return undefined;
    }
  }

  if (Nome !== '' && FiltroSpecies === '' && FiltroStatus === '') {
    try {
      const resposta = await http.get<IFiltro>(`character/?name=${Nome}&page=${Page}`);
      return resposta.data;
    }
    catch (err) {
      return undefined;
    }
  }

  if (Nome !== '' && FiltroSpecies !== '' && FiltroStatus === '') {
    try {
      const resposta = await http.get<IFiltro>(`character/?name=${Nome}&species=${FiltroSpecies}&page=${Page}`);
      return resposta.data;
    } catch (error) {
      return undefined;
    }

  }

  if (Nome !== '' && FiltroSpecies === '' && FiltroStatus !== '') {
    try {
      const resposta = await http.get<IFiltro>(`character/?name=${Nome}&status=${FiltroStatus}&page=${Page}`);
      return resposta.data;
    } catch (error) {
      return undefined;
    }
  }
}

export default useRequest;
