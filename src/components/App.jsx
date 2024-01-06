import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { useFeedback } from 'hooks/useFeedback';

const buttons = ['Good', 'Neutral', 'Bad'];

const App = () => {
    const { good, neutral, bad, leaveFeedback, total, positiveFeedback } =
        useFeedback();

    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={buttons}
                    onLeaveFeedback={leaveFeedback}
                />
            </Section>
            <Section title="Statistics">
                {total ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positiveFeedback}
                    />
                ) : (
                    'No feedback given'
                )}
            </Section>
        </>
    );
};

export default App;
