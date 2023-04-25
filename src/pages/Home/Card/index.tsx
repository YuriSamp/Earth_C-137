import { IPersonagens } from 'interfaces/personagens';

interface Props {
  Obj: IPersonagens[]
}

export const Card = ({ Obj }: Props) => {
  return (
    <section className='w-screen bg-gray-900  text-gray-200'>
      <div className='xl:py-10 xl:px-10 md:px-5 md:py-5 grid gap-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center'>
        {Obj.map(item =>
          <div key={item.id}
            className='w-96 md:w-80 bg-green-800 flex flex-col items-center rounded-2xl px-2 py-2 flex-wrap md:px-0'>
            <div>
              <img src={item.image} className='pt-3 rounded-2xl w-80 md:w-64' />
            </div>
            <div className='pt-3'>
              <p className='text-2xl font-MontSerrat text-center  md:text-xl'>{item.name}</p>
            </div>
            <div className='flex py-2'>
              <div className='flex flex-col w-40 items-center'>
                <p>Status:</p>
                <p className='text-xl font-medium font-MontSerrat md:text-lg'>{item.status}</p>
              </div>
              <div className='flex flex-col w-40 items-center'>
                <p>Specie:</p>
                <p className='text-xl font-medium font-MontSerrat text-center  md:text-lg'>{item.species}</p>
              </div>
            </div>
            <div className='flex pb-2 flex-col'>
              <div className='flex flex-col items-center py-1'>
                <p>Origin:</p>
                <p className='text-xl font-medium font-MontSerrat  md:text-lg'>{item.origin.name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
