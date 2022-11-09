import { useRecoilValue } from 'recoil';
import { darkMode } from 'util/state/atom';

export const Footer = () => {

  const DarkMode = useRecoilValue(darkMode);

  return (
    <footer className={DarkMode ? 'dark' : ''} >
      <div className='bg-gray-200 dark:bg-gray-900'>
        <div className='flex justify-center  border-black '>
          <p className='py-6 text-3xl font-RickAndMorty pb-5 text-blue-600  dark:text-green-600'>Welcome to this crazy world</p>
        </div>
      </div>
    </footer>
  );
};