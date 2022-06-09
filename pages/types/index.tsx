import { useState } from 'react';
import useSWR from 'swr';
import dynamic from 'next/dynamic';

import { Card, Input, RadioSelect } from '../../components';

import fetcher from '../../libs/fetcher';

const NoSSRImage = dynamic(
  () => import('../../components/custom/CustomImage'),
  {
    ssr: false,
  }
);

const types = [
  {
    label: 'Normal',
    value: 'Normal',
    image: '/types/POKEMON_TYPE_NORMAL.png',
    icon: '/types/ico_0_normal.png',
  },
  {
    label: 'Fighting',
    value: 'Fighting',
    image: '/types/POKEMON_TYPE_FIGHTING.png',
    icon: '/types/ico_1_fighting.png',
  },
  {
    label: 'Flying',
    value: 'Flying',
    image: '/types/POKEMON_TYPE_FLYING.png',
    icon: '/types/ico_2_flying.png',
  },
  {
    label: 'Poison',
    value: 'Poison',
    image: '/types/POKEMON_TYPE_POISON.png',
    icon: '/types/ico_3_poison.png',
  },
  {
    label: 'Ground',
    value: 'Ground',
    image: '/types/POKEMON_TYPE_GROUND.png',
    icon: '/types/ico_4_ground.png',
  },
  {
    label: 'Rock',
    value: 'Rock',
    image: '/types/POKEMON_TYPE_ROCK.png',
    icon: '/types/ico_5_rock.png',
  },
  {
    label: 'Bug',
    value: 'Bug',
    image: '/types/POKEMON_TYPE_BUG.png',
    icon: '/types/ico_6_bug.png',
  },
  {
    label: 'Ghost',
    value: 'Ghost',
    image: '/types/POKEMON_TYPE_GHOST.png',
    icon: '/types/ico_7_ghost.png',
  },
  {
    label: 'Steel',
    value: 'Steel',
    image: '/types/POKEMON_TYPE_STEEL.png',
    icon: '/types/ico_8_steel.png',
  },
  {
    label: 'Fire',
    value: 'Fire',
    image: '/types/POKEMON_TYPE_FIRE.png',
    icon: '/types/ico_9_fire.png',
  },
  {
    label: 'Water',
    value: 'Water',
    image: '/types/POKEMON_TYPE_WATER.png',
    icon: '/types/ico_10_water.png',
  },
  {
    label: 'Grass',
    value: 'Grass',
    image: '/types/POKEMON_TYPE_GRASS.png',
    icon: '/types/ico_11_grass.png',
  },
  {
    label: 'Electric',
    value: 'Electric',
    image: '/types/POKEMON_TYPE_ELECTRIC.png',
    icon: '/types/ico_12_electric.png',
  },
  {
    label: 'Psychic',
    value: 'Psychic',
    image: '/types/POKEMON_TYPE_PSYCHIC.png',
    icon: '/types/ico_13_psychic.png',
  },
  {
    label: 'Ice',
    value: 'Ice',
    image: '/types/POKEMON_TYPE_ICE.png',
    icon: '/types/ico_14_ice.png',
  },
  {
    label: 'Dragon',
    value: 'Dragon',
    image: '/types/POKEMON_TYPE_DRAGON.png',
    icon: '/types/ico_15_dragon.png',
  },
  {
    label: 'Dark',
    value: 'Dark',
    image: '/types/POKEMON_TYPE_DARK.png',
    icon: '/types/ico_16_dark.png',
  },
  {
    label: 'Fairy',
    value: 'Fairy',
    image: '/types/POKEMON_TYPE_FAIRY.png',
    icon: '/types/ico_17_fairy.png',
  },
];

const Types = () => {
  const [selected, setSelected] = useState('all');
  const { data: pokemons } = useSWR(`/api/types`, fetcher);

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
      {selected && <h1 className="text-center my-4">All {selected} Type Pokemons</h1>}
      <div className="flex gap-4 flex-wrap mt-6">
        {pokemons?.types &&
          pokemons.types
            .filter(
              (pokemon: any) =>
                pokemon.type.includes(selected) && pokemon.form === 'Normal'
            )
            .map((pokemon: any) => {
              const id = `${pokemon.pokemon_id}`;
              let num: any = '';
              let img = '/pokemons/pokemon_icon_';
              const imgURLEnd = '_00.png';
              const len = id.length;
              if (len === 1) {
                num = '00' + pokemon.pokemon_id;
              } else if (len === 2) {
                num = '0' + pokemon.pokemon_id;
              } else {
                num = pokemon.pokemon_id;
              }
              let url = '';
              const multipleForms = [
                201, 386, 412, 413, 421, 422, 423, 479, 487, 550, 555, 585, 586,
                641, 642, 645, 648, 646, 649,
              ];
              const newImages = [
                669, 670, 671, 676, 708, 709, 710, 711, 712, 713, 714, 715, 716,
                717, 718, 719, 720, 722, 723, 724, 725, 726, 727, 728, 729, 730,
                731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743,
                744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756,
                757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 782,
                783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 819, 820, 821,
                822, 823, 824, 831, 832, 833, 834, 835, 836, 862, 863, 865, 866,
                867, 868, 869, 870, 888, 889, 893,
              ];
              if (multipleForms.includes(pokemon.pokemon_id)) {
                url = img + num + '_11.png';
              } else if (newImages.includes(pokemon.pokemon_id)) {
                url = '/pokemons/' + num + '.webp';
              } else {
                url = img + num + imgURLEnd;
              }

              return (
                <Card
                  key={pokemon.pokemon_id}
                  size="small"
                  route={`/pokemons/${pokemon.pokemon_id}`}
                  title={pokemon.pokemon_name}
                  classNames={{
                    wrapper:
                      'hover:shadow-hover hover:border border-newBlue-light4',
                  }}
                >
                  <div className="flex justify-center items-center flex-col p-2">
                    <NoSSRImage
                      src={url}
                      width={100}
                      height={100}
                      alt="row_image"
                    />
                  </div>
                </Card>
              );
            })}
      </div>
    </div>
  );
};

export default Types;
