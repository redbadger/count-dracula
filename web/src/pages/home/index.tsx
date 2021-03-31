import { Hero } from 'nhsuk-react-components';
import React from 'react';

import Page from '../../components/page';

const Home: React.FC = () => {
  return (
    <Page>
      <Hero>
        <Hero.Heading>We're here for you.</Hero.Heading>
        <Hero.Text>
          Helping you take control of your health and wellbeing.
        </Hero.Text>
      </Hero>
    </Page>
  );
};

export default Home;
