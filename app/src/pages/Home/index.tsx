import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { IPersonagens } from '../../interfaces/personagens';
import { useRecoilValue } from 'recoil';
import { darkMode } from 'state/atom';
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
  const DarkMode = useRecoilValue(darkMode);

  useEffect(() => {
    const dados = useRequest(FiltroSpecies, FiltroStatus, Nome, Page);
    dados.then(data => {
      if (data) {
        setObj(data.results);
        setContador(data.info.pages);
        setContadorObjetos(data.info.count);
      }
    });

    if (Page > contador) {
      setPage(1);
    }

    if (Page < 1) {
      setPage(contador);
    }

    contadorObjetos < 20 ? setMaisPersonagens(false) : setMaisPersonagens(true);
    contadorObjetos === 0 ? setSemPersonagens(true) : setSemPersonagens(false);

  }, [Page, FiltroSpecies, FiltroStatus, Nome],);

  return (
    <main className={DarkMode ? 'dark' : ''}>
      <div className='flex flex-col items-center pt-14 dark:bg-gray-900  bg-gray-200'>
        <h1 className='text-7xl font-RickAndMorty pb-5 text-teal-600 dark:text-green-400'>The Rick and Morty Tracker</h1>
        <Filter
          DarkMode={DarkMode}
          setNome={setNome}
          setPage={setPage}
          setFiltroSpecies={setFiltroSpecies}
          setFiltroStatus={setFiltroStatus}
        />
      </div>
      <Card
        Obj={Obj}
        Number={1}/>
      {MaisPersonagens &&
        <div className='flex justify-center pb-5 gap-16 bg-gray-200 dark:bg-gray-900 items-center'>
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
