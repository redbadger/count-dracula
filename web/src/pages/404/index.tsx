import { Col, Container, Row, WarningCallout } from 'nhsuk-react-components';
import React from 'react';
import Page from '../../components/page';

const ErrorPage: React.FC = () => {
  return (
    <Page>
      <Container>
        <Row>
          <Col width="full">
            <WarningCallout label="404">
              <p>Page not Found</p>
            </WarningCallout>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default ErrorPage;
