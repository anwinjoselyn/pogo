import { useRouter } from 'next/router';
import useSWR from 'swr';

import { Card, Info } from '../../components';

import fetcher from '../../libs/fetcher';

const Pokemons = () => {
  const { query } = useRouter();
  const { data } = useSWR(`/api/pokemons/${query.id}`, fetcher);
  console.log('data', data);
  return (
    <div className="p-4">
      <h1 className="text-center mb-4 font-semibold text-lg">
        {data?.data?.stats?.pokemon_name}
      </h1>
      <div className="flex gap-2 justify-center flex-wrap">
        <Card size="large" classNames={{ body: 'p-2' }} title="Stats">
          <Info
            title="Type"
            content={data?.data?.type?.type.map((t: any) => (
              <span key={t} className="pl-2">
                {t}
              </span>
            ))}
          />
          <br />
          <Info title="Base Attack" content={data?.data?.stats?.base_attack} />
          <Info
            title="Base Defense"
            content={data?.data?.stats?.base_defense}
          />
          <Info
            title="Base Stamina"
            content={data?.data?.stats?.base_stamina}
          />
          <br />
          <Info
            title="Can Nest?"
            content={data?.data?.canNest ? 'YES' : 'NO'}
          />
          <br />
          <Info
            title="Max CP"
            content={data?.data?.maxCPData?.max_cp ?? '---'}
          />
        </Card>
        <Card size="large" classNames={{ body: 'p-2' }} title="Encounter">
          <Info
            title="Base Capture Rate"
            content={`${data?.data?.encounter?.base_capture_rate * 100}%`}
          />
          <Info
            title="Base Flee Rate"
            content={`${data?.data?.encounter?.base_flee_rate * 100}%`}
          />
          <Info
            title="Base Attack Probability"
            content={`${data?.data?.encounter?.attack_probability * 100}%`}
          />
          <Info
            title="Base Dodge Probability"
            content={`${data?.data?.encounter?.dodge_probability * 100}%`}
          />
        </Card>
        <Card size="large" classNames={{ body: 'p-2' }} title="Shiny">
          <Info
            title="From Egg?"
            content={data?.data?.shinyData?.found_egg ? 'YES' : 'NO'}
          />
          <Info
            title="From Evolution?"
            content={data?.data?.shinyData?.found_evolution ? 'YES' : 'NO'}
          />
          <Info
            title="From Photo Bomb?"
            content={data?.data?.shinyData?.found_photobomb ? 'YES' : 'NO'}
          />
          <Info
            title="From Raids?"
            content={data?.data?.shinyData?.found_raid ? 'YES' : 'NO'}
          />
          <Info
            title="From Research?"
            content={data?.data?.shinyData?.found_research ? 'YES' : 'NO'}
          />
          <Info
            title="In Wild?"
            content={data?.data?.shinyData?.found_wild ? 'YES' : 'NO'}
          />
        </Card>
      </div>
    </div>
  );
};

export default Pokemons;
