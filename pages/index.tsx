import type { NextPage } from 'next';
import Head from 'next/head';

import { Card } from '../components';

import { mainCards } from '../constants/defaultValues';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Private Pokemon Go Info App</title>
        <meta name="description" content="A Pokemon Go fan web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex gap-2 p-4">
        Hello
        {mainCards.map((card: any) => (
          <Card key={card.title} {...card} />
        ))}
      </main>
    </div>
  );
};

export default Home;
