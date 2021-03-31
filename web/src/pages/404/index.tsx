import { WarningCallout } from 'nhsuk-react-components';
import React from 'react';
import Page from '../../components/page';

const ErrorPage: React.FC = () => {
  return (
    <Page>
      <WarningCallout label="404">
        <p>Page not Found</p>
      </WarningCallout>
    </Page>
  );
};

export default ErrorPage;
