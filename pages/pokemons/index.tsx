import { useState } from 'react';
import useSWR from 'swr';

import { Card, Input } from '../../components';

import fetcher from '../../libs/fetcher';

const Pokemons = () => {
  const [search, setSearch] = useState('');
  const { data } = useSWR(`/api/pokemons/names`, fetcher);

  return (
    <div className="p-4">
      <div className="flex justify-between p-3">
        <h1 className="text-center mb-4 font-semibold text-lg">All Pokemons</h1>
        <Input
          field={{ name: 'search', placeholder: 'Search...' }}
          classNames={{
            wrapper: 'mr-6',
            input: 'dark:bg-newBlue-darkest min-w-[300px]',
          }}
          icon={<span className="material-icons">search</span>}
          iconPosition="left"
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        {data?.names &&
          data.names
            .filter((name: any) =>
              name.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((name: any) => (
              <Card key={name.id} size="small" route={`/pokemons/${name.id}`}>
                {name.name}
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Pokemons;
