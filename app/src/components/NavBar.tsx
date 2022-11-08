import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { darkMode } from 'state/atom';

export const NavBar = () => {

  const [DarkMode, setDarkMode] = useRecoilState(darkMode);

  return (
    <nav className={DarkMode ? 'dark' : ''} >
      <div className='h-20 items-center flex justify-around  border-black bg-teal-600 dark:bg-gray-900 '>
        <div className='items-center '>
          <p className='flex text-2xl font-MontSerrat text-gray-100 dark:text-green-600 '>
            Welcome to Earth C-137
          </p>
        </div>
        <div className='flex gap-4 items-center'>
          <Link to="/"><Button variant='text' size='lg'  className='text-gray-100 dark:text-green-600'>Characters</Button></Link>
          <Link to="/Locations"><Button variant='text' size='lg' className='text-gray-100 dark:text-green-600'>Locations</Button></Link>
          <Button variant='text' size='lg' className='text-gray-100 dark:text-green-600' onClick={() => setDarkMode(!DarkMode)}>{DarkMode ? 'light Mode' :  'Dark Mode'}</Button>
        </div>
      </div>
    </nav>
  );
};

