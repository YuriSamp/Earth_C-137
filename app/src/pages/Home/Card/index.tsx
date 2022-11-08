import { IPersonagens } from 'interfaces/personagens';

interface Props {
  Obj : IPersonagens[]
  Number : number
}

export const Card = ({Obj,Number} : Props ) => {

  //Eu só passei esse Number pq tava dando um erro que eu não consegui solucionar na hora, tenho que revisar isso aqui

  return (
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
  );
};