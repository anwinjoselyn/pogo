export const sidebarValues: any = [
  {
    key: 1,
    title: 'Home',
    route: '/',
    icon: 'home',
  },
  {
    key: 2,
    title: 'Pokemons',
    description: 'List of all Pokemons',
    route: '/pokemons',
    icon: 'star',
    children: [
      {
        key: 1,
        title: 'All',
        route: '/pokemons',
        icon: 'grade',
        children: [
          {
            key: 1,
            title: 'Info',
            route: '/pokemons/:id',
            icon: 'info',
            children: [
              {
                key: 1,
                title: 'Moves',
                route: '/pokemons/:id/moves',
                hide: true,
              },
              {
                key: 2,
                title: 'Counters',
                route: '/pokemons/:id/counters',
                hide: true,
              },
              {
                key: 3,
                title: 'IV Chart',
                route: '/pokemons/:id/ivs',
                hide: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 3,
    title: 'Generations',
    route: '/generations',
    icon: 'favorite',
    children: [
      {
        key: 1,
        title: 'All',
        route: '/generations',
        children: [
          {
            key: 1,
            title: 'Info',
            route: '/generations/:name',
            hide: true,
          },
        ],
      },
    ],
  },
  {
    key: 4,
    title: 'Types',
    route: '/types',
    icon: 'key',
    children: [
      {
        key: 1,
        title: 'All',
        route: '/types',
        children: [{ key: 1, title: 'All', route: '/types/:name', hide: true }],
      },
    ],
  },
  {
    key: 5,
    title: 'Best By Type',
    route: '/best',
    icon: 'key',
    children: [
      {
        key: 1,
        title: 'All',
        route: '/best',
        children: [{ key: 1, title: 'All', route: '/best/:name', hide: true }],
      },
    ],
  },
];

export const mainCards: any = [
  {
    title: 'All Pokemons',
    description: 'List of all Pokemons',
    route: '/pokemons',
    classNames: {},
  },
  {
    title: 'Generations',
    description: 'List of all Generations',
    route: '/generations',
    classNames: {},
  },
  {
    title: 'Types',
    description: 'List of all Types',
    route: '/types',
    classNames: {},
  },
];

export const types = [
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
