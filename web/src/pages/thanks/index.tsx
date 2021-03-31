import { Col, Container, Row } from 'nhsuk-react-components';
import React from 'react';
import Page from '../../components/page';

const Thanks: React.FC = () => {
  return (
    <Page>
      <Container>
        <Row>
          <Col width="full">
            <h1>Thanks</h1>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default Thanks;
