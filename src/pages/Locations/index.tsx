import { useState, useEffect } from 'react';
import { http } from 'util/http';
import { Accordion, AccordionHeader, AccordionBody, } from '@material-tailwind/react';
import { FiltroLocation, ILocation } from 'interfaces/Location';
import { Pagination } from 'components/pagination';

export const Locations = () => {

  const [Location, setLocation] = useState<ILocation[]>([]);
  const [open, setOpen] = useState(false);
  const [Page, setPage] = useState(1);

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
        const newArr = resp.data.results.map(item => {
          const novoObjeto = {
            ...item,
            boolean: true
          };
          return novoObjeto;
        });
        setLocation(newArr);
      });
    setOpen(false);

  }, [Page]);

  const handleOpen = (id: number) => {
    Location.filter(item => {
      if (item.id !== id) {
        item.boolean = !item.boolean;
        setOpen(item.boolean === true ? false : true);
      }
    });
  };

  return (
    <main >
      <div className='flex flex-col items-center pt-14 bg-gray-900 '>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-RickAndMorty pb-5 text-green-400'>Did you get any of that</h1>
      </div>
      <div>
        <section className='py-10 px-20 grid gap-3 grid-cols-1 2xl:grid-cols-2 justify-items-center bg-gray-900 min-h-[50rem]' >
          {Location.map(item =>
            <Accordion
              key={item.id}
              className='px-10 w-96 xl:w-[32rem] 2xl::w-[40rem]'
              open={open === item.boolean}
            >
              <AccordionHeader onClick={() => handleOpen(item.id)} id='locationDisplay' >
                <p className='text-green-400'>{item.name}</p>
              </AccordionHeader>
              <AccordionBody>
                <div className='flex flex-col'>
                  <div className='flex flex-col gap-1 text-white'>
                    <p>Dimension: {item.dimension}</p>
                    <p>Type: {item.type}</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          )}
        </section>
        <Pagination
          decrease={() => setPage(Page - 1)}
          increase={() => setPage(Page + 1)}
          page={Page}
        />
      </div>
    </main>
  );
};
