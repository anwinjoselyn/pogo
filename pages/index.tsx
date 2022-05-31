import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Private Pokemon Go Info App</title>
        <meta name="description" content="A Pokemon Go fan web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the AJ Poke App</h1>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
