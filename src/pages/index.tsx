import Head from "next/head";

import styles from "../styles/pages/index.module.css";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={styles.home}>
        <span>Hello World</span>
      </div>
    </>
  );
};

export default Home;
