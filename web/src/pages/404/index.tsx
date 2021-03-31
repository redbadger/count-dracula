import { WarningCallout } from 'nhsuk-react-components';
import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <WarningCallout label="404">
      <p>Page not Found</p>
    </WarningCallout>
  );
};

export default ErrorPage;
