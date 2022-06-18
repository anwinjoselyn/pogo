import { useState } from 'react';
import useSWR from 'swr';
import dynamic from 'next/dynamic';

import { Card, Input } from '../../components';

import fetcher from '../../libs/fetcher';

const NoSSRImage = dynamic(
  () => import('../../components/custom/CustomImage'),
  {
    ssr: false,
  }
);

const Pokemons = () => {
  const [search, setSearch] = useState('');
  const { data } = useSWR(`/api/pokemons/names`, fetcher);

  return (
    <div className="p-4">
      <div className="flex justify-between p-3 sticky top-0 bg-white z-10">
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
      <div className="flex gap-4 flex-wrap">
        {data?.names &&
          data.names
            .filter((name: any) =>
              name.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((name: any) => {
              const id = `${name.id}`;
              let num: any = '';
              let img = '/pokemons/pokemon_icon_';
              const imgURLEnd = '_00.png';
              const len = id.length;
              if (len === 1) {
                num = '00' + name.id;
              } else if (len === 2) {
                num = '0' + name.id;
              } else {
                num = name.id;
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
              if (multipleForms.includes(name.id)) {
                url = img + num + '_11.png';
              } else if (newImages.includes(name.id)) {
                url = '/pokemons/' + num + '.webp';
              } else {
                url = img + num + imgURLEnd;
              }

              return (
                <Card
                  key={name.id}
                  size="small"
                  route={`/pokemons/${name.id}`}
                  title={name.name}
                  classNames={{
                    wrapper:
                      'hover:shadow-hover hover:border',
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

export default Pokemons;
