import { BackLink, Col, Container, Row } from 'nhsuk-react-components';
import React from 'react';
import { useHistory } from 'react-router';
import Page from '../../components/page';

const Thanks: React.FC = () => {
  const history = useHistory();

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    history.push('/');
  };
  return (
    <Page>
      <Container>
        <Row>
          <Col width="full">
            <BackLink onClick={handleOnClick}>Back</BackLink>
          </Col>
        </Row>
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
