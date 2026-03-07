import React from "react";
import Head from "next/head";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Digital Marketing for Business Growth | Integers Insights</title>
        <meta
          name="description"
          content="Accelerate business growth with data-driven digital marketing services including SEO, paid advertising, lead generation, marketing automation, and analytics."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
