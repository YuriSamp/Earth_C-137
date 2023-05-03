export function SuspenseCard() {
  const arr = new Array(12).fill('');
  return (
    <section className='bg-gray-900  text-gray-200'>
      <div className='xl:py-10 xl:px-10 px-5 py-5 grid gap-3 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 justify-items-center'>
        {arr.map((item, i) =>
          <div key={i}
            className='w-80  bg-green-800 flex flex-col items-center rounded-2xl py-2 flex-wrap px-0 text-lg'>
            <div>
              <div className='pt-3 rounded-2xl w-64 h-[268px] bg-gray-400 ' />
            </div>
            <div className='pt-3'>
              <p className='w-40 bg-gray-400 h-8 rounded-md'></p>
            </div>
            <div className='flex py-2'>
              <div className='flex flex-col w-40 items-center'>
                <p className='text-black'>Status:</p>
                <div className='text-xl font-medium font-MontSerrat h-7 w-24 bg-gray-400 rounded-md '></div>
              </div>
              <div className='flex flex-col w-40 items-center'>
                <p className='text-black'>Specie:</p>
                <div className='text-xl font-medium font-MontSerrat h-7 w-24 bg-gray-400 rounded-md '></div>
              </div>
            </div>
            <div className='flex pb-2 flex-col'>
              <div className='flex flex-col items-center py-1'>
                <p className='text-black'>Origin:</p>
                <div className='text-xl font-medium font-MontSerrat h-7 w-24 bg-gray-400 rounded-md'></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
