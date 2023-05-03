import { useEffect, useState } from 'react';
import { IPersonagens } from '../../interfaces/personagens';
import useRequest from 'hooks/useRequest';
import { Filter } from './Filter';
import { Card } from './Card';
import { Pagination } from 'components/pagination';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'hooks/useDebounce';

export const Home = () => {

  const [Characters, setCharacters] = useState<IPersonagens[]>([]);
  const [FiltroStatus, setFiltroStatus] = useState('');
  const [FiltroSpecies, setFiltroSpecies] = useState('');
  const [Nome, setNome] = useState('');

  const debouncedName = useDebounce<string>(Nome, 500);

  const [MaisPersonagens, setMaisPersonagens] = useState(true);
  const [SemPersonagens, setSemPersonagens] = useState(false);
  const [Page, setPage] = useState(1);
  const [contador, setContador] = useState(0);
  const [contadorObjetos, setContadorObjetos] = useState(20);

  const { data } = useQuery({
    queryKey: ['projects', FiltroSpecies, FiltroStatus, debouncedName, Page],
    queryFn: () => useRequest(FiltroSpecies, FiltroStatus, Nome, Page),
    keepPreviousData: true
  });

  useEffect(() => {
    console.log('eu fui chamado');
    if (data !== undefined) {
      setCharacters(data.results);
      setContador(data.info.pages);
      setContadorObjetos(data.info.count);
      setSemPersonagens(false);
    }
    else {
      setSemPersonagens(true);
    }

    Page > contador && setPage(1);
    Page < 1 && setPage(contador);
    contadorObjetos < 20 ? setMaisPersonagens(false) : setMaisPersonagens(true);
  }, [data]);

  return (
    <main >
      <div className='flex flex-col items-center pt-14 bg-gray-900 '>
        <h1 className='text-2xl sm:text-3xl md:text-5xl xl:text-7xl font-RickAndMorty pb-5 text-green-400'>The Rick and Morty Tracker</h1>
        <Filter
          setNome={setNome}
          setPage={setPage}
          setFiltroSpecies={setFiltroSpecies}
          setFiltroStatus={setFiltroStatus}
        />
      </div>
      {SemPersonagens ?
        <section>
          <div className='flex flex-col items-center justify-center pt-14 bg-gray-900 h-[39rem]'>
            <h1 className='text-2xl md:text-5xl xl:text-7xl font-RickAndMorty pb-5 text-green-400'>There is nothing here bro</h1>
          </div>
        </section>
        :
        <Card Obj={Characters} />
      }
      {MaisPersonagens &&
        <Pagination
          decrease={() => {
            setPage(Page - 1);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth', });
          }}
          increase={() => {
            setPage(Page + 1);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth', });
          }}
          page={Page}
        />
      }
    </main>
  );
};
