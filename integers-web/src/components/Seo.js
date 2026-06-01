import Head from "next/head";

export default function Seo({
  title,
  description,
  //   image,
  url,
}) {

  const ogImage ="https://www.integersinsights.com/images/og-image.png";

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

      <meta property="og:image" content={ogImage} />

      <meta property="og:url" content={url} />
    </Head>
  );
}
