import { IPersonagens } from 'interfaces/personagens';

interface Props {
  Obj: IPersonagens[]
}

export const Card = ({ Obj }: Props) => {
  return (
    <section className='bg-gray-900  text-gray-200'>
      <div className='xl:py-10 xl:px-10 px-5 py-5 grid gap-3 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 justify-items-center'>
        {Obj.map(item =>
          <div key={item.id}
            className='w-80  bg-green-800 flex flex-col items-center rounded-2xl py-2 flex-wrap px-0 text-lg'>
            <div>
              <img src={item.image} alt={item.name} className='pt-3 rounded-2xl w-64' />
            </div>
            <div className='pt-3'>
              <p className='text-2xl font-MontSerrat text-center '>{item.name}</p>
            </div>
            <div className='flex py-2'>
              <div className='flex flex-col w-40 items-center'>
                <p>Status:</p>
                <p className='text-xl font-medium font-MontSerrat'>{item.status}</p>
              </div>
              <div className='flex flex-col w-40 items-center'>
                <p>Specie:</p>
                <p className='text-xl font-medium font-MontSerrat text-center'>{item.species}</p>
              </div>
            </div>
            <div className='flex pb-2 flex-col'>
              <div className='flex flex-col items-center py-1'>
                <p>Origin:</p>
                <p className='text-xl text-center font-medium font-MontSerrat'>{item.origin.name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
