import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import GlobalHeader from "../components/GlobalHeader"
import GlobalFooter from "../components/GlobalFooter"

function SafeSpace({ Component, pageProps }) {
  return (
    <>
      <div className="appWrapper">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <GlobalHeader />
        <div className="appContainer">
          <Component {...pageProps} />
        </div>
        <GlobalFooter />
      </div>
    </>
  );
}

export default SafeSpace;
