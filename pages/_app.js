import '../styles/globals.css';

// components
import Head from 'next/head';
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter} from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
        <title>Riya's Portfolio</title>
        <link rel="icon" href="/bg-exploion.png" />
    </Head>
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full" style={{height: "99vh"}}>
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
    </>
  );
}

export default MyApp;
