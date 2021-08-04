import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes } from '@config';
import { useSiteMetadata } from '@hooks';
import { LandingLayout } from '@layouts';
import { LandingNav, TypingTitle, ErrorBoundary } from '@components';

const Home = (): JSX.Element => {
  const { siteUrl, title, landingTitles } = useSiteMetadata();

  return (
    <div>
      <ErrorBoundary>
        <Helmet key={siteUrl}>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={siteUrl} />
        </Helmet>
      </ErrorBoundary>
      <LandingLayout>
        <LandingNav routes={Routes} />
        <TypingTitle titles={landingTitles} />
      </LandingLayout>
    </div>
  );
};

export default Home;
