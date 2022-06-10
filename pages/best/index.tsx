import { useState } from 'react';
import useSWR from 'swr';
import dynamic from 'next/dynamic';

import { Switch, RadioSelect } from '../../components';

import fetcher from '../../libs/fetcher';
import { types } from '../../constants/defaultValues';

const NoSSRImage = dynamic(
  () => import('../../components/custom/CustomImage'),
  {
    ssr: false,
  }
);

export const Best = () => {
  const [main, setMain] = useState(true);
  const [selected, setSelected] = useState('Normal');

  const { data: pokemons } = useSWR(
    `/api/best/${selected.toLowerCase()}`,
    fetcher
  );
  console.log('selected', selected);
  console.log('pokemons', pokemons);

  return (
    <div className="p-4">
      <RadioSelect
        options={types}
        selected={selected}
        onSelect={(value: string) => setSelected(value)}
        classNames={{
          wrapper: 'gap-2 px-6',
          option: 'w-40 border border-gray-300 rounded-lg p-2',
        }}
      />
      <div className="flex items-center justify-between px-10">
        <div>Extreme Weather</div>
        <Switch
          on={main}
          onChange={() => setMain(!main)}
          label="Matching moves from Pokemon's main type"
        />
      </div>
      {selected && (
        <h1 className="text-center my-4">Best {selected} Type Pokemons</h1>
      )}
    </div>
  );
};

export default Best;
