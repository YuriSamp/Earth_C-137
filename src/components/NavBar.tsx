import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (
    <nav >
      <div className='h-20 items-center flex justify-center md:justify-around  bg-gray-900 '>
        <div className='items-center '>
          <p className='hidden md:flex md:text-2xl font-MontSerrat text-green-600  '>
            Welcome to Earth C-137
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <Link to="/"><Button variant='text' size='lg' className='text-green-600'>Characters</Button></Link>
          <Link to="/Locations"><Button variant='text' size='lg' className='text-green-600'>Locations</Button></Link>
        </div>
      </div>
    </nav>
  );
};
