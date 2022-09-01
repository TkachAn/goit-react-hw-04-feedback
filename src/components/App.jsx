import { useState } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './Section/Section';
import Container from './container/container';
import Notification from './Notification/Notification';
import css from './container/container.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtn = option => {
    if (option === 'good') {
      setGood(good + 1);
    }

    if (option === 'neutral') {
      setNeutral(neutral + 1);
    }

    if (option === 'bad') {
      setBad(bad + 1);
    }
  };
  const total = Number(good + neutral + bad);
  const percent = Number(total > 0 ? (good / total) * 100 : 0).toFixed(1);

  return (
    <Container className={css.feedback}>
      <Section title="Please leave feedback" className={css.hh}>
        <div className={css.feed}>
          <div className={css.pp}>
            <FeedbackOptions onLeaveFeedback={handleBtn} />
          </div>
        </div>
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={percent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
