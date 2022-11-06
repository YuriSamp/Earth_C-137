import { useRecoilValue } from 'recoil';
import { darkMode } from 'state/atom';

export const Footer = () => {

  const DarkMode = useRecoilValue(darkMode);

  return (
    <footer className={DarkMode ? 'dark' : ''} >
      <div className='bg-gray-200 dark:bg-gray-900'>
        <div className='flex justify-center  border-black '>
          <p className='py-6 text-3xl font-RickAndMorty pb-5 text-green-400'>Welcome to this crazy world</p>
        </div>
      </div>
    </footer>
  );
};