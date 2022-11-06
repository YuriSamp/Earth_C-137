import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { IPersonagens } from '../../interfaces/personagens';
import { Input, Select, Option } from '@material-tailwind/react';
import { IFiltro } from 'interfaces/Filtro';
import { http } from 'util/http';
import { useRecoilValue } from 'recoil';
import { darkMode } from 'state/atom';

export const Home = () => {

  // variaveis para a  Querry 

  const [Obj, setObj] = useState<IPersonagens[]>([]);
  const [FiltroStatus, setFiltroStatus] = useState('');
  const [FiltroSpecies, setFiltroSpecies] = useState('');
  const [Nome, setNome] = useState('');
  const [MaisPersonagens, setMaisPersonagens] = useState(true);
  const [Page, setPage] = useState(1);
  const [contador, setContador] = useState(0);
  const [contadorObjetos, setContadorObjetos] = useState(20);

  // o resto 
  
  const DarkMode = useRecoilValue(darkMode);

  useEffect(() => {
    if (FiltroSpecies === '' && FiltroStatus === '' && Nome === '') {
      http.get(`character/?page=${Page}`)
        .then(resp => {
          setObj(resp.data.results);
          setContador(resp.data.info.pages);
          setContadorObjetos(resp.data.info.count);
          console.log('passei no primeiro if');
        });
    }
    if (FiltroSpecies !== '' && FiltroStatus === '' && Nome === '') {
      http.get<IFiltro>(`character/?species=${FiltroSpecies}&page=${Page}`)
        .then(resp => {
          setObj(resp.data.results);
          setContador(resp.data.info.pages);
          setContadorObjetos(resp.data.info.count);
          console.log('passei no if de somente specie modificada');

        }
        );
    }
    if (FiltroStatus !== '' && FiltroSpecies === '' && Nome === '') {
      http.get<IFiltro>(`character/?status=${FiltroStatus}&page=${Page}`)
        .then(resp => {
          setObj(resp.data.results);
          setContador(resp.data.info.pages);
          setContadorObjetos(resp.data.info.count);
          console.log('passei no if de somente specie modificada');
        }
        );
    }

    if (FiltroSpecies !== '' && FiltroStatus !== '' && Nome === '') {
      http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&page=${Page}`)
        .then(resp => {
          setObj(resp.data.results);
          setContador(resp.data.info.pages);
          setContadorObjetos(resp.data.info.count);
          console.log('passei no if de specie e status modificada');
        }
        );
    }
    if (FiltroSpecies !== 'all' && FiltroStatus !== 'all' && Nome !== '') {
      http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&name=${Nome}&page=${Page}`)
        .then(resp => {
          setObj(resp.data.results);
          setContador(resp.data.info.pages);
          setContadorObjetos(resp.data.info.count);
          console.log('passei no if de todos modificados');
        }
        );
    }
    if (Nome !== '' && FiltroSpecies === 'all' && FiltroStatus === 'all') {
      http.get<IFiltro>(`character/?name=${Nome}&page=${Page}`)
        .then(resp => {
          setObj(resp.data.results);
          setContador(resp.data.info.pages);
          setContadorObjetos(resp.data.info.count);
          console.log('passei no if de nome modificado');
        }
        );
    }
    if (Nome !== '' && FiltroSpecies !== 'all' && FiltroStatus === 'all') {
      http.get<IFiltro>(`character/?name=${Nome}&page=${Page}`)
        .then(resp => {
          setObj(resp.data.results);
          setContador(resp.data.info.pages);
          setContadorObjetos(resp.data.info.count);
          console.log('passei no if de nome e especie modificado');
        }
        );
    }
    if (Nome !== '' && FiltroSpecies === 'all' && FiltroStatus !== 'all') {
      http.get<IFiltro>(`character/?name=${Nome}&page=${Page}`)
        .then(resp => {
          setObj(resp.data.results);
          setContador(resp.data.info.pages);
          setContadorObjetos(resp.data.info.count);
          console.log('passei no if de nome e status modificado');

        }
        );
    }

    // Comparação de Pagina

    if (Page > contador) {
      setPage(1);
    }

    if (Page < 1) {
      setPage(contador);
    }

    // Logica dos botões para verificar se há personagens necessarios para ir para proxima página

    contadorObjetos < 20 ? setMaisPersonagens(false) : setMaisPersonagens(true);

  }, [Page, FiltroSpecies, FiltroStatus, Nome],);

  console.log(contador);

  const handleSelectStatus = (e: any) => {
    setPage(1);
    setFiltroStatus(e);
  };

  const handleSelectSpecies = (e: any) => {
    setPage(1);
    setFiltroSpecies(e);
  };

  return (
    <main className={DarkMode ? 'dark' : ''}>
      <div className='flex flex-col items-center pt-14 dark:bg-gray-900  bg-gray-200'>
        <h1 className='text-7xl font-RickAndMorty pb-5 text-green-400'>The Rick and Morty Tracker</h1>
        <div className='w-[32rem] pt-5'>
          <Input
            variant='outlined'
            label='Search a character'
            size="lg"
            color="light-green"
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div className='flex py-3 gap-5'>
          <Select
            variant="outlined"
            label="Status"
            color='light-green'
            size='md'
            onChange={handleSelectStatus}
          >
            <Option value='alive' >Alive</Option>
            <Option value='dead' >Dead</Option>
            <Option value='unknown'>Unknown</Option>
            <Option value=''>All</Option>
          </Select>
          <Select
            variant="outlined"
            label="Species"
            size='md'
            color='light-green'
            onChange={handleSelectSpecies}>
            <Option value='human'>Human</Option>
            <Option value='alien'>Alien</Option>
            <Option value='humanoid'>Humanoid</Option>
            <Option value='poopybutthole'>Poopybutthole</Option>
            <Option value='Mythological Creature'>Mythological Creature</Option>
            <Option value='cronenberg'>Cronenberg</Option>
            <Option value='disease'>Disease</Option>
            <Option value='robot'>Robot</Option>
            <Option value='unknown'>Unknown</Option>
            <Option value='animal'>Animal</Option>
            <Option value=''>All</Option>
          </Select>
        </div>
      </div>
      <section className='w-screen bg-gray-200 dark:bg-gray-900'>
        <div className='py-10 px-10 grid gap-3 grid-cols-4  justify-items-center'>
          {Obj.map(item =>
            <div key={item.id}
              className='w-96 bg-teal-600 dark:bg-green-800 flex flex-col items-center rounded-2xl px-2 py-2 flex-wrap'>
              <div>
                <img src={item.image} className='pt-3 rounded-2xl w-80' />
              </div>
              <div className='pt-3'>
                <p className='text-2xl font-MontSerrat text-center dark:text-gray-200'>{item.name}</p>
              </div>
              <div className='flex py-2'>
                <div className='flex flex-col w-40 items-center'>
                  <p className='dark:text-gray-200'>Status:</p>
                  <p className='text-xl font-medium font-MontSerrat dark:text-gray-200'>{item.status}</p>
                </div>
                <div className='flex flex-col w-40 items-center'>
                  <p className='dark:text-gray-200'>Specie:</p>
                  <p className='text-xl font-medium font-MontSerrat text-center dark:text-gray-200'>{item.species}</p>
                </div>
              </div>
              <div className='flex pb-2 flex-col'>
                <div className='flex flex-col items-center py-1'>
                  <p className='dark:text-gray-200'>Origin:</p>
                  <p className='text-xl font-medium font-MontSerrat dark:text-gray-200'>{item.origin.name}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
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
