import { Input, Select, Option } from '@material-tailwind/react';

interface Props {
  DarkMode : boolean,
  setNome : React.Dispatch<React.SetStateAction<string>>,
  setPage : React.Dispatch<React.SetStateAction<number>>,
  setFiltroSpecies : React.Dispatch<React.SetStateAction<string>> 
  setFiltroStatus : React.Dispatch<React.SetStateAction<string>>
}

export const Filter = ({ DarkMode, setNome, setPage, setFiltroStatus, setFiltroSpecies } : Props) => {

  const handleSelectStatus = (e: any) => {
    setPage(1);
    setFiltroStatus(e);
  };

  const handleSelectSpecies = (e: any) => {
    setPage(1);
    setFiltroSpecies(e);
  };

  return (
    <section className='flex flex-col items-center'>
      <div className='w-[32rem] pt-5'>
        <Input
          variant='outlined'
          label='Search a character'
          size="lg"
          color={DarkMode ? 'light-green' : 'indigo'}
          className='text-black'
          onChange={e => setNome(e.target.value)}
        />
      </div>
      <div className='flex py-3 gap-5'>
        <Select
          variant="outlined"
          label="Status"
          color={DarkMode ? 'light-green' : 'indigo'}
          size='md'
          onChange={handleSelectStatus}
        >
          <Option value='alive' >Alive</Option>
          <Option value='dead' >Dead</Option>
          <Option value='unknown'>Unknown</Option>
          <Option value=''>All</Option>
        </Select>
        <Select
          variant="outlined"
          label="Species"
          size='md'
          color={DarkMode ? 'light-green' : 'indigo'}
          onChange={handleSelectSpecies}>
          <Option value='human'>Human</Option>
          <Option value='alien'>Alien</Option>
          <Option value='humanoid'>Humanoid</Option>
          <Option value='poopybutthole'>Poopybutthole</Option>
          <Option value='Mythological Creature'>Mythological Creature</Option>
          <Option value='cronenberg'>Cronenberg</Option>
          <Option value='disease'>Disease</Option>
          <Option value='robot'>Robot</Option>
          <Option value='unknown'>Unknown</Option>
          <Option value='animal'>Animal</Option>
          <Option value=''>All</Option>
        </Select>
      </div>
    </section>
  );
};