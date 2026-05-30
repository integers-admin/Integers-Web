import Head from "next/head";

export default function Seo({
  title,
  description,
  //   image,
  url,
}) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      {/* <meta property="og:image" content={image} /> */}

      <meta property="og:url" content={url} />
    </Head>
  );
}
