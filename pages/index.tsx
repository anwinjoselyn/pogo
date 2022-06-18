import type { NextPage } from 'next';

import { Card } from '../components';

import { mainCards } from '../constants/defaultValues';

const Home: NextPage = () => {
  return (
    <main className="flex gap-2 p-4 justify-center items-center">
      {mainCards.map((card: any) => (
        <Card key={card.title} {...card}>
          <div className="text-center py-6">{card.description}</div>
        </Card>
      ))}
    </main>
  );
};

export default Home;
