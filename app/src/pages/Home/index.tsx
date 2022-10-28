import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { IPersonagens } from '../../interfaces/personagens';
import { Input, Select, Option } from '@material-tailwind/react';
import { IFiltro } from 'interfaces/Filtro';
import { http } from 'util/http';

export const Home = () => {

  const [Obj, setObj] = useState<IPersonagens[]>([]);
  const [FiltroStatus, setFiltroStatus] = useState('');
  const [FiltroSpecies, setFiltroSpecies] = useState('');
  const [Nome, setNome] = useState('');
  const [MaisPersonagens, setMaisPersonagens] = useState(true);
  const [SemPersonagens, setSemPersonagens] = useState(false);
  const [Page, setPage] = useState(1);

  useEffect(() => {

    if (FiltroSpecies !== 'all') {
      http.get<IFiltro>(`character/?species=${FiltroSpecies}&page=${Page}`)
        .then(response => {
          setObj(response.data.results);
  
          console.log(response.data);
          if (response.data.info.count < 20) {
            setMaisPersonagens(false);
          } else {
            setMaisPersonagens(true);
          }

          if (response.data.info.count === 0) {
            setSemPersonagens(true);
          }
          else {
            setSemPersonagens(false);
          }
        }
        );
    }


    if (FiltroStatus !== 'all') {
      http.get<IFiltro>(`character/?status=${FiltroStatus}&page=${Page}`)
        .then(response => {
          setObj(response.data.results);
 
          if (response.data.info.count < 20) {
            setMaisPersonagens(false);
          } else {
            setMaisPersonagens(true);
          }

          if (response.data.info.count === 0) {
            setSemPersonagens(true);
          }
          else {
            setSemPersonagens(false);
          }
        }
        );
    }
    if (FiltroSpecies !== 'all' && FiltroStatus !== 'all') {
      http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&page=${Page}`)
        .then(response => {
          setObj(response.data.results);
  
          if (response.data.info.count < 20) {
            setMaisPersonagens(false);
          } else {
            setMaisPersonagens(true);
          }

          if (response.data.info.count === 0) {
            setSemPersonagens(true);
          }
          else {
            setSemPersonagens(false);
          }
        }
        );
    }
    if (FiltroSpecies !== 'all' && FiltroStatus !== 'all' && Nome === '') {
      http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&page=${Page}`)
        .then(response => {
          setObj(response.data.results);
     
          if (response.data.info.count < 20) {
            setMaisPersonagens(false);
          } else {
            setMaisPersonagens(true);
          }

          if (response.data.info.count === 0) {
            setSemPersonagens(true);
          }
          else {
            setSemPersonagens(false);
          }
        }
        );
    }
    if (FiltroSpecies !== 'all' && FiltroStatus !== 'all' && Nome !== '') {
      http.get<IFiltro>(`character/?status=${FiltroStatus}&species=${FiltroSpecies}&name=${Nome}&page=${Page}`)
        .then(response => {
          setObj(response.data.results);
    
          if (response.data.info.count < 20) {
            setMaisPersonagens(false);
          } else {
            setMaisPersonagens(true);
          }
          if (response.data.info.count === 0) {
            setSemPersonagens(true);
          }
          else {
            setSemPersonagens(false);
          }
        }
        );
    }
    if (Nome !== '' && FiltroSpecies === 'all' && FiltroStatus === 'all') {
      http.get<IFiltro>(`character/?name=${Nome}&page=${Page}`)
        .then(response => {
          setObj(response.data.results);
         
          if (response.data.info.count < 20) {
            setMaisPersonagens(false);
          }
        }
        );
    }
  }, [FiltroSpecies, FiltroStatus, Nome, Page],);

  const handleSelectStatus = (e: any) => {
    setFiltroStatus(e);
  };

  const handleSelectSpecies = (e: any) => {
    setFiltroSpecies(e);
  };

  return (
    <main>
      <nav className='h-20 items-center flex justify-around border-b-[0.1px] border-black'>
        <div className='items-center '>
          <p className='flex text-xl font-MontSerrat'>
            Welcome to Earth C-137
          </p>
        </div>
        <div className='flex gap-4'>
          <Button variant='text' size='lg' color='light-green'>Characters</Button>
          <Button variant='text' size='lg' color='light-green'>Episodes</Button>
          <Button variant='text' size='lg' color='light-green'>Locations</Button>
        </div>
      </nav>
      <div className='flex flex-col items-center pt-14 '>
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
            <Option value='all'>All</Option>
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
            <Option value='all'>All</Option>
          </Select>
        </div>
      </div>
      {SemPersonagens ? <section>
        <p>There is no such Characters, You are a crazy person</p>
      </section> :
        <section className='w-screen'>
          <div className='py-10 px-10 grid gap-3 grid-cols-4  justify-items-center'>
            {Obj.map(item =>
              <div key={item.id}
                className='w-96 bg-cyan-50 flex flex-col items-center rounded-2xl px-2 py-2 flex-wrap'>
                <div>
                  <img src={item.image} className='pt-3 rounded-2xl w-80' />
                </div>
                <div className='pt-3'>
                  <p className='text-2xl font-MontSerrat text-center'>{item.name}</p>
                </div>
                <div className='flex py-2'>
                  <div className='flex flex-col w-40 items-center'>
                    <p className=''>Status:</p>
                    <p className='text-xl font-medium font-MontSerrat'>{item.status}</p>
                  </div>
                  <div className='flex flex-col w-40 items-center'>
                    <p className=''>Specie:</p>
                    <p className='text-xl font-medium font-MontSerrat text-center'>{item.species}</p>
                  </div>
                </div>
                <div className='flex pb-2 flex-col'>
                  <div className='flex flex-col items-center py-1'>
                    <p>Origin:</p>
                    <p className='text-xl font-medium font-MontSerrat'>{item.origin.name}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      }
      {MaisPersonagens &&
        <div className='flex justify-center pb-5 gap-16'>
          <Button
            variant='filled'
            size='lg'
            color='light-green'
            onClick={() => {
              setPage(Page - 1);
              window.scrollTo(0, 0);
            }}>Prev Page</Button>
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
      <footer>
        <div className='flex justify-center border-t-[0.1px] border-black'>
          <p className='py-6 text-2xl text-indigo-600'>Made with Madness, React and Tailwind</p>
        </div>
      </footer>
    </main>
  );
};
