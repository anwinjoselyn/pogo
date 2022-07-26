/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Switch,
  RadioSelect,
  Table,
  Tag,
  MultiSelect,
} from '../../../components';

import fetcher from '../../../libs/fetcher';
import { types } from '../../../constants/defaultValues';

const NoSSRImage = dynamic(
  () => import('../../../components/custom/CustomImage'),
  {
    ssr: false,
  }
);

export const Best = () => {
  const [main, setMain] = useState(true);
  const [selected, setSelected] = useState('Normal');
  const [forms, setForms] = useState<any>({
    isFetching: true,
    data: [],
  });
  const { query } = useRouter();
  const { data } = useSWR({ url: `/api/pokemons/${query.id}` }, fetcher);
  console.log('data', data);

  const { data: pokemons } = useSWR(
    { url: `/api/best/${selected.toLowerCase()}` },
    fetcher
  );
  console.log('pokemons', pokemons);
  const { data: effectiveness } = useSWR(
    data?.data?.type?.type
      ? {
          url: '/api/counters',
          method: 'POST',
          body: { types: data?.data?.type?.type },
        }
      : null,
    fetcher
  );
  console.log('effectiveness', effectiveness);
  useEffect(() => {
    if (effectiveness) {
      effectiveness.counters.forEach((counter: any) => {
        if (counter.form) {
          forms.data = {
            ...forms.data,
            [counter.form.toLowerCase()]: {
              label: counter.form,
              selected: true,
            },
          };
        }
      });
      forms.isFetching = false;
      setForms({ ...forms });
    }
  }, [effectiveness]);

  const handleSelect = (value: string) => {
    forms.data[value].selected = !forms.data[value].selected;
    setForms({ ...forms });
  };

  const generateRows = () => {
    if (effectiveness?.counters) {
      return (
        effectiveness?.counters
          // .filter((pokemon: any) =>
          //   !forms.data.mega.selected ? pokemon.form !== 'Mega' : true
          // )
          // .filter((pokemon: any) =>
          //   !forms.data.shadow.selected ? pokemon.form !== 'Shadow' : true
          // )
          .map((pokemon: any, idx: number) => {
            const id = `${pokemon.id}`;
            let num: any = '';
            let img = '/pokemons/pokemon_icon_';
            const imgURLEnd = '_00.png';
            const len = id.length;
            if (len === 1) {
              num = '00' + pokemon.id;
            } else if (len === 2) {
              num = '0' + pokemon.id;
            } else {
              num = pokemon.id;
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
            if (pokemon.form === 'Mega') {
              url = img + num + '_51.png';
            } else if (multipleForms.includes(pokemon.id)) {
              url = img + num + '_11.png';
            } else if (newImages.includes(pokemon.id)) {
              url = '/pokemons/' + num + '.webp';
            } else {
              url = img + num + imgURLEnd;
            }
            return (
              <tr key={idx} className="border-b">
                <td>{pokemon.id}</td>
                <td>
                  <div className="flex items-center">
                    <Link href={`/pokemons/${pokemon.id}`}>
                      <NoSSRImage
                        src={url}
                        width={60}
                        height={60}
                        alt="row_image"
                      />
                    </Link>
                    <div className="flex flex-col p-2 cursor-pointer">
                      <div>
                        {pokemon.name}
                        {pokemon.form && (
                          <span className="text-sm text-new-light-2 dark:text-new-normal-3 ml-2">
                            ({pokemon.form})
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {pokemon.type1 && (
                          <Tag
                            label={pokemon.type1}
                            icon={
                              types.find(
                                (type: any) =>
                                  type.value.toLowerCase() === pokemon.type1
                              )?.icon
                            }
                          />
                        )}
                        {pokemon.type2 && (
                          <Tag
                            label={pokemon.type2}
                            icon={
                              types.find(
                                (type: any) =>
                                  type.value.toLowerCase() === pokemon.type2
                              )?.icon
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <NoSSRImage
                      src={
                        types.find(
                          (type: any) =>
                            type.value.toLowerCase() === pokemon.qm_type
                        )?.icon
                      }
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    {pokemon.qm}
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <NoSSRImage
                      src={
                        types.find(
                          (type: any) =>
                            type.value.toLowerCase() === pokemon.cm_type
                        )?.icon
                      }
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    {pokemon.cm}
                  </div>
                </td>
                <td>{pokemon.DPS.toLocaleString()}</td>
                <td>{pokemon.TDO.toLocaleString()}</td>
                <td>{pokemon.POW.toLocaleString()}</td>
              </tr>
            );
          })
      );
    }
    return null;
  };
  console.log('forms', forms);
  if (!data?.data?.type?.type || !effectiveness || forms.isFetching) {
    return null;
  }

  return (
    <div className="p-4">
      <h1 className="text-center mb-4 font-semibold text-lg">
        {data?.data?.stats?.pokemon_name}
        {!data?.data?.isReleased && (
          <span className="text-sm ml-2">Not Released</span>
        )}{' '}
        Counters
      </h1>
      <div className="flex items-center justify-center px-10 border-t border-b mt-4 border-new-normal-5">
        <div className="flex flex-col items-center">
          <div className="my-3 font-semibold">Forms</div>
          {!forms.isFetching && (
            <MultiSelect
              options={forms.data}
              onSelect={(value: string) => handleSelect(value)}
              classNames={{
                wrapper: 'gap-2 px-6',
                option: 'w-40 rounded-lg p-2',
              }}
            />
          )}
        </div>
      </div>
      <div className="px-6 mt-4">
        <Table
          rows={generateRows()}
          headerData={[
            'ID',
            'Pokemon',
            'Fast Move',
            'Charged Move',
            'DPS',
            'TDO',
            'POW',
          ]}
        />
      </div>
    </div>
  );
};

export default Best;
