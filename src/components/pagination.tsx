interface props {
  increase: () => void,
  decrease: () => void,
  page: number
}

export function Pagination({ decrease, increase, page }: props) {
  return (
    <div className='flex justify-center pb-5 gap-3 sm:gap-16 bg-gray-900 items-center'>
      <button
        className='text-white bg-[#8bc34A] px-5 py-3 rounded-lg text-lg font-sans'
        onClick={() => decrease()}>Prev Page</button>
      <p className='text-xl font-MontSerrat text-green-600'>Page {page}</p>
      <button
        className='text-white bg-[#8bc34A] px-5 py-3 rounded-lg text-lg font-sans'
        onClick={() => increase()}>Next Page</button>
    </div>
  );
}
