import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function SafeSpace({ Component, pageProps }) {
  return (
    <div className='appWrapper'>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <link rel='shortcut icon' href='/favicon.png' />
        <meta name='theme-color' content='#000000' />
        <link rel='apple-touch-icon' href='/favicon.png' />
        <meta name='apple-mobile-web-app-title' content='SafeSpace.' />

        <title>SafeSpace.</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default SafeSpace;
