import {
  Button,
  Checkboxes,
  Col,
  Container,
  Row,
} from 'nhsuk-react-components';
import React, { SyntheticEvent, useState } from 'react';

import Page from '../../components/page';

const Home: React.FC = () => {
  const [changeEventLog, setChangeEventLog] = useState<Array<string>>([]);
  const [inputEventLog, setInputEventLog] = useState<Array<string>>([]);
  const [currentValue, setCurrentValue] = useState<Array<string>>([]);

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setChangeEventLog([
      ...changeEventLog,
      `[${target.id}] Value: ${target.value}, Checked: ${target.checked}`,
    ]);
    if (currentValue.includes(target.value)) {
      setCurrentValue(currentValue.filter((x) => x !== target.value));
    } else {
      setCurrentValue([...currentValue, target.value]);
    }
  };

  const handleInput = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputEventLog([
      ...inputEventLog,
      `[${target.id}] Value: ${target.value}, Checked: ${target.checked}`,
    ]);
  };

  console.log({
    changeEventLog,
    inputEventLog,
    currentValue,
  });

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
            <Checkboxes onChange={handleChange} onInput={handleInput}>
              <Checkboxes.Box value="healthy">
                Are fit and healthy
              </Checkboxes.Box>
              <Checkboxes.Box value="weight">
                Weight between 7 stone 12 lbs and 25 stone, or 50kg and 158kg
              </Checkboxes.Box>
              <Checkboxes.Box value="age">
                Are aged between 17 and 66 (or 70 if you have given blood
                before)
              </Checkboxes.Box>
            </Checkboxes>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default Home;
