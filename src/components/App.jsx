import { useState } from 'react';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtn = (option, func) => {
    const [state, setState] = useState(0);
    func(func => ({
      [option]: func[option] + 1,
    }));
  };
  const handleGood = () => {
    good = setGoog(good + 1);
  };
  const totalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };
  const positiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return good + neutral + bad > 0 ? (good / (good + neutral + bad)) * 100 : 0;
  };
  // const { good, neutral, bad } = this.state;
  const total = totalFeedback(state);
  const positivePercentage = Number(
    positiveFeedbackPercentage(state).toFixed(1)
  );
  return (
    <Container className={css.feedback}>
      <Section title="Please leave feedback" className={css.hh}>
        <div className={css.feed}>
          {/* <h3>Please leave feedback</h3> */}
          <div className={css.pp}>
            <FeedbackOptions
              options={Object.keys(state)}
              onLeaveFeedback={handleBtn}
            />
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
            percent={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
