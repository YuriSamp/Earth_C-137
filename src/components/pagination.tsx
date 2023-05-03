import { Button } from '@material-tailwind/react';

interface props {
  increase: () => void,
  decrease: () => void,
  page: number
}

export function Pagination({ decrease, increase, page }: props) {
  return (
    <div className='flex justify-center pb-5 gap-3 sm:gap-16 bg-gray-900 items-center'>
      <Button
        variant='filled'
        size='lg'
        color='light-green'
        onClick={() => decrease()}>Prev Page</Button>
      <p className='text-xl font-MontSerrat text-green-600'>Page {page}</p>
      <Button
        variant='filled'
        size='lg'
        color='light-green'
        onClick={() => increase()}>Next Page</Button>
    </div>
  );
}
