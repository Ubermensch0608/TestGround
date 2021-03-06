import axios from "axios";
import AutoList from "../components/AutoList";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export interface ProductsInterface {
  products: { plus_name: string };
}

const Home: NextPage<{ products: { plus_name: string }[] }> = ({
  products,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MSW PlayGround</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AutoList products={products} />
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export const getStaticProps = async (ctx: any) => {
  const { data } = await axios.get("https://my.backend/product-brand");

  return {
    props: {
      products: data,
    },
  };
};

export default Home;
