import useSWR from 'swr';

import { Card } from '../../components';

import fetcher from '../../libs/fetcher';

const Pokemons = () => {
  const { data } = useSWR(`/api/pokemons/names`, fetcher);

  return (
    <div className="p-4">
      <h1 className="text-center mb-4 font-semibold text-lg">All Pokemons</h1>
      <div className="flex gap-2 flex-wrap">
        {data?.names &&
          data.names.map((name: any) => (
            <Card key={name.id} size="small" route={`/pokemons/${name.id}`}>
              {name.name}
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Pokemons;
