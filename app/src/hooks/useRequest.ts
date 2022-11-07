import { IFiltro } from 'interfaces/Filtro';
import { http } from 'util/http';

function useRequest(FiltroSpecies: string, FiltroStatus: string, Nome: string, Page: number) {

  if (FiltroSpecies === '' && FiltroStatus === '' && Nome === '') {
    const resposta = async function PegaResposta() {
      http.get(`character/?page=${Page}`)
        .then(resp => {
          return (resp.data);
        });
    };
    return resposta;
  }
  if (FiltroSpecies !== '' && FiltroStatus === '' && Nome === '') {
    http.get<IFiltro>(`character/?species=${FiltroSpecies}&page=${Page}`)
      .then(resp => {
        return (resp.data);
      }
      );
  }
  if (FiltroStatus !== '' && FiltroSpecies === '' && Nome === '') {
    http.get<IFiltro>(`character/?status=${FiltroStatus}&page=${Page}`)
      .then(resp => {
        return (resp.data);
      }
      );
  }
  if (FiltroSpecies !== '' && FiltroStatus !== '' && Nome === '') {
    http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&page=${Page}`)
      .then(resp => {
        return (resp.data);
      }
      );
  }
  if (FiltroSpecies !== '' && FiltroStatus !== '' && Nome !== '') {
    http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&name=${Nome}&page=${Page}`)
      .then(resp => {
        return (resp.data);
      }
      );
  }
  if (Nome !== '' && FiltroSpecies === '' && FiltroStatus === '') {
    http.get<IFiltro>(`character/?name=${Nome}&page=${Page}`)
      .then(resp => {
        return (resp.data);
      }
      );
  }
  if (Nome !== '' && FiltroSpecies !== '' && FiltroStatus === '') {
    http.get<IFiltro>(`character/?name=${Nome}&page=${Page}`)
      .then(resp => {
        return (resp.data);
      }
      );
  }
  if (Nome !== '' && FiltroSpecies === '' && FiltroStatus !== '') {
    http.get<IFiltro>(`character/?name=${Nome}&page=${Page}`)
      .then(resp => {
        return (resp.data);
      }
      );
  }
}

export default useRequest;