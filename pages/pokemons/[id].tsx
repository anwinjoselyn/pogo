import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

import { Card, Info, RadioSelect } from '../../components';

import fetcher from '../../libs/fetcher';

// import placeholder from '/pokemons/placeholder.jpeg';

const NoSSRImage = dynamic(
  () => import('../../components/custom/CustomImage'),
  {
    ssr: false,
  }
);

const Pokemon = ({ imageURL }: { imageURL: any }) => {
  const [selected, setSelected] = useState('normal');
  const { query } = useRouter();
  const { data } = useSWR(`/api/pokemons/${query.id}`, fetcher);
  console.log('data', data);

  return (
    <div className="p-4">
      <div className="flex">
        <div className="w-2/3">
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
              <Info
                title="Base Attack"
                content={data?.data?.stats?.base_attack}
              />
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
            <Card size="large" classNames={{ body: 'p-2' }} title="Moves">
              <Info
                title="Fast"
                content={data?.data?.movesData?.fast_moves.map(
                  (m: any, idx: number) => (
                    <span key={m} className="ml-2">
                      {m}
                      {idx !== data?.data?.movesData?.fast_moves.length - 1 &&
                        ','}
                    </span>
                  )
                )}
              />
              <Info
                title="Charged"
                content={data?.data?.movesData?.charged_moves.map(
                  (m: any, idx: number) => (
                    <span key={m} className="ml-2">
                      {m}
                      {idx !==
                        data?.data?.movesData?.charged_moves.length - 1 && ','}
                    </span>
                  )
                )}
              />
            </Card>
            <Card size="large" classNames={{ body: 'p-2' }} title="Encounter">
              <Info
                title="Base Capture Rate"
                content={`${Math.round(
                  data?.data?.encounter?.base_capture_rate * 100
                )}%`}
              />
              <Info
                title="Base Flee Rate"
                content={`${Math.round(
                  data?.data?.encounter?.base_flee_rate * 100
                )}%`}
              />
              <Info
                title="Base Attack Probability"
                content={`${Math.round(
                  data?.data?.encounter?.attack_probability * 100
                )}%`}
              />
              <Info
                title="Base Dodge Probability"
                content={`${Math.round(
                  data?.data?.encounter?.dodge_probability * 100
                )}%`}
              />
            </Card>
            {data?.data?.evolutionData?.evolutions?.map(
              (e: any, idx: number) => (
                <Card
                  key={idx}
                  size="large"
                  classNames={{ body: 'p-2' }}
                  title={`Evolution ${idx + 1}`}
                  route={`/pokemons/${e.pokemon_id}`}
                >
                  <Info title="Name" content={e.pokemon_name} />
                  <Info title="Candy Required" content={e.candy_required} />
                  <Info title="Form" content={e.form} />
                </Card>
              )
            )}
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
        <div className="w-1/3 h-full">
          <RadioSelect
            options={[
              { label: 'Normal', value: 'normal' },
              { label: 'Shiny', value: 'shiny' },
            ]}
            selected={selected}
            onSelect={(value: string) => setSelected(value)}
          />
          <div className="border border-newBlue-light6 pb-14 rounded-md p-2 flex items-center justify-center">
            <NoSSRImage
              src={selected === 'normal' ? imageURL.normal : imageURL.shiny}
              width={256}
              height={256}
              alt="row_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  let num: any = '';
  let img = '/pokemons/pokemon_icon_';
  const imgURLEnd = '_00';
  const len = params.id?.length;
  if (len === 1) {
    num = '00' + params.id;
  } else if (len === 2) {
    num = '0' + params.id;
  } else {
    num = params.id;
  }
  let url = '';
  let shinyURL = '';
  const multipleForms = [
    201, 386, 412, 413, 421, 422, 423, 479, 487, 550, 555, 585, 586, 641, 642,
    645, 648, 646, 649,
  ];
  const newImages = [
    669, 670, 671, 676, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718,
    719, 720, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734,
    735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749,
    750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764,
    765, 766, 767, 768, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792,
    819, 820, 821, 822, 823, 824, 831, 832, 833, 834, 835, 836, 862, 863, 865,
    866, 867, 868, 869, 870, 888, 889, 893,
  ];
  if (multipleForms.includes(Number(params.id))) {
    url = img + num + '_11.png';
    shinyURL = img + num + '_11_shiny.png';
    console.log('multiple forms');
  } else if (newImages.includes(Number(params.id))) {
    url = '/pokemons/' + num + '.webp';
    shinyURL = '/pokemons/placeholder.jpeg';
    console.log('newImages');
  } else {
    url = img + num + imgURLEnd + '.png';
    shinyURL = img + num + imgURLEnd + '_shiny' + '.png';
    console.log('else');
  }
  //   img += num + imgURLEnd;
  //   const normal = img + num + imgURLEnd + '.png';
  //   const shiny = img + num + imgURLEnd + '_shiny' + '.png';

  return { props: { imageURL: { normal: url, shiny: shinyURL } } };
}

export default Pokemon;
