export const sidebarValues: any = [
  {
    key: 1,
    title: 'Pokemons',
    description: 'List of all Pokemons',
    route: '/pokemons',
    children: [
      {
        key: 1,
        title: 'Info',
        route: '/pokemons/:id',
        children: [
          { key: 1, title: 'Moves', route: '/pokemons/:id/moves' },
          { key: 2, title: 'Counters', route: '/pokemons/:id/counters' },
          { key: 3, title: 'IV Chart', route: '/pokemons/:id/ivs' },
        ],
      },
      {
        key: 2,
        title: 'Generations',
        route: '/pokemons/generations',
        children: [
          { key: 1, title: 'Info', route: '/pokemons/generations/:name' },
        ],
      },
      {
        key: 3,
        title: 'Types',
        route: '/pokemons/types',
        children: [{ key: 1, title: 'Info', route: '/pokemons/types/:name' }],
      },
    ],
  },
];
