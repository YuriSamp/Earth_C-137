import { Button } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import { http } from 'util/http';
import { Accordion, AccordionHeader, AccordionBody, } from '@material-tailwind/react';
import { FiltroLocation, ILocation } from 'interfaces/Location';
import { useRecoilValue } from 'recoil';
import { darkMode } from 'state/atom';

interface Props {
  id: number,
  open: number
}

function Icon({ id, open }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export const Locations = () => {

  const [Location, setLocation] = useState<ILocation[]>([]);
  const [open, setOpen] = useState(0);
  const [Page, setPage] = useState(1);
  const DarkMode = useRecoilValue(darkMode);

  const contador = 7;
  if (Page > contador) {
    setPage(1);
  }
  if (Page < 1) {
    setPage(contador);
  }

  useEffect(() => {
    http.get<FiltroLocation>(`location/?page=${Page}`)
      .then(resp => {
        setLocation(resp.data.results);
      });
  }, [Page]);
 
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <main className={DarkMode ? 'dark' : ''}>
      <div className='flex flex-col items-center pt-14 bg-gray-200 dark:bg-gray-900  '>
        <h1 className='text-7xl font-RickAndMorty pb-5 text-green-400'>Did you get any of that</h1>
        <div className='w-[32rem] pt-5'>
        </div>
      </div>
      <div>
        <section className='py-10 px-20 grid gap-3 grid-cols-2 justify-items-center bg-gray-200 dark:bg-gray-900' >
          {Location.map(item =>
            <div key={item.id}>
              <Accordion className='px-10 w-[40rem]' open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  <p className='text-green-400'>{item.name}</p>
                </AccordionHeader>
                <AccordionBody>
                  <div className='flex flex-col'>
                    <div className='flex flex-col gap-1'>
                      <p>Dimension: {item.dimension}</p>
                      <p>Type: {item.type}</p>
                    </div>
                    <div>

                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
          )}
        </section>
        <div className='flex justify-center pb-5 gap-16 bg-gray-200 dark:bg-gray-900 items-center'>
          <Button
            variant='filled'
            size='lg'
            color='light-green'
            onClick={() => {
              setPage(Page - 1);
            }}>Prev Page</Button>
          <p className='text-xl font-MontSerrat text-green-600'>Page {Page}</p>
          <Button
            variant='filled'
            size='lg'
            color='light-green'
            onClick={() => {
              setPage(Page + 1);
            }}>Next Page</Button>
        </div>
      </div>
    </main>
  );
};