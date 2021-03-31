import { Col, Container, Row } from 'nhsuk-react-components';
import React from 'react';

import Form from '../../components/form';
import Page from '../../components/page';

const Home: React.FC = () => {
  return (
    <Page>
      <Container>
        <Row>
          <Col width="full">
            <h1>Blood donation</h1>
          </Col>
        </Row>
        <Row>
          <Col width="full">
            <Form />
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default Home;
