import useSWR, { useSWRConfig } from 'swr';

import { Card } from '../components';

import fetcher from '../libs/fetcher';

const Pokemons = () => {
  const { data } = useSWR(`/api/pokemons/names`, fetcher);
  console.log('data', data);
  return (
    <div>
      <h1>All Pokemons</h1>
      <div>Pokemon Cards</div>
    </div>
  );
};

export default Pokemons;
