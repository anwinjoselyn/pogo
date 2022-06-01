import { useRouter } from 'next/router';
import useSWR from 'swr';

import { Card } from '../../components';

import fetcher from '../../libs/fetcher';

const Pokemons = () => {
  const { query } = useRouter();
  const { data } = useSWR(`/api/pokemons/${query.id}`, fetcher);
  console.log('data', data);
  return (
    <div className="p-4">
      <h1 className="text-center mb-4 font-semibold text-lg">All Pokemons</h1>
      <div className="flex gap-2 flex-wrap">
        <Card
          size="large"
          title={data?.data?.pokemon_name}
          classNames={{ body: 'p-2' }}
        >
          <div className="flex justify-between">
            <span>Base Attack</span>
            <span>{data?.data?.base_attack}</span>
          </div>
          <div className="flex justify-between">
            <span>Base Defense</span>
            <span>{data?.data?.base_defense}</span>
          </div>
          <div className="flex justify-between">
            <span>Base Stamina</span>
            <span>{data?.data?.base_stamina}</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Pokemons;
