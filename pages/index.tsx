import type { NextPage } from 'next';

import { Card } from '../components';

import { mainCards } from '../constants/defaultValues';

const Home: NextPage = () => {
  return (
    <main className="p-8">
      <h1 className="text-center">Welcome to The PogoStop - A fan app for private Pokemon Go info</h1>
      <div className="flex gap-2 p-4 justify-center items-center mt-8">
        {mainCards.map((card: any) => (
          <Card key={card.title} {...card}>
            <div className="text-center py-6">{card.description}</div>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
