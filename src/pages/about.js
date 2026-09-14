import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function AboutRedirect() {
  const target = useBaseUrl('/story');
  if (typeof window !== 'undefined') {
    window.location.replace(target + window.location.hash);
  }
  return (
    <Head>
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <link rel="canonical" href={target} />
    </Head>
  );
}
