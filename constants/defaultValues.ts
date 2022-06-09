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
