import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function SafeSpace({ Component, pageProps }) {
  return (
    <div className='appWrapper'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>SafeSpace.</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default SafeSpace;
