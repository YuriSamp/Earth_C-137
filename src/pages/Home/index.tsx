import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { IPersonagens } from '../../interfaces/personagens';
import { useRecoilValue } from 'recoil';
import { darkMode } from 'util/state/atom';
import useRequest from 'hooks/useRequest';
import { Filter } from './Filter';
import { Card } from './Card';

export const Home = () => {

  const [Obj, setObj] = useState<IPersonagens[]>([]);
  const [FiltroStatus, setFiltroStatus] = useState('');
  const [FiltroSpecies, setFiltroSpecies] = useState('');
  const [Nome, setNome] = useState('');
  const [MaisPersonagens, setMaisPersonagens] = useState(true);
  const [SemPersonagens, setSemPersonagens] = useState(false);
  const [Page, setPage] = useState(1);
  const [contador, setContador] = useState(0);
  const [contadorObjetos, setContadorObjetos] = useState(20);

  useEffect(() => {

    const dados = useRequest(FiltroSpecies, FiltroStatus, Nome, Page);
    dados.then(data => {
      if (data !== undefined) {
        setObj(data.results);
        setContador(data.info.pages);
        setContadorObjetos(data.info.count);
        setSemPersonagens(false);
      }
      else {
        setSemPersonagens(true);
      }
    });

    if (Page > contador) {
      setPage(1);
    }

    if (Page < 1) {
      setPage(contador);
    }

    contadorObjetos < 20 ? setMaisPersonagens(false) : setMaisPersonagens(true);

  }, [Page, FiltroSpecies, FiltroStatus, Nome],);

  return (
    <main >
      <div className='flex flex-col items-center pt-14 bg-gray-900 '>
        <h1 className='text-3xl md:text-5xl xl:text-7xl font-RickAndMorty pb-5 text-green-400'>The Rick and Morty Tracker</h1>
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
        <Card
          Obj={Obj}
        />
      }
      {MaisPersonagens &&
        <div className='flex justify-center pb-5 pt-5 gap-8 sm:gap-16 bg-gray-900 items-center'>
          <Button
            variant='filled'
            size='lg'
            color='light-green'
            onClick={() => {
              setPage(Page - 1);
              window.scrollTo(0, 0);
            }}>Prev Page</Button>
          <p className='text-xl font-MontSerrat text-green-600'>Page {Page}</p>
          <Button
            variant='filled'
            size='lg'
            color='light-green'
            onClick={() => {
              setPage(Page + 1);
              window.scrollTo(0, 0);
            }}>Next Page</Button>
        </div>
      }
    </main>
  );
};
