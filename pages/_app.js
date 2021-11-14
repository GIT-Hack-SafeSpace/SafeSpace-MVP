import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";

function SafeSpace({ Component, pageProps }) {
  return (
    <div style={{width: '317px', margin: '0 auto'}}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default SafeSpace;
