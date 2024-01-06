import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';

const buttons = ['Good', 'Neutral', 'Bad'];

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    leaveFeedback = event => {
        const option = event.target.textContent.toLowerCase();

        this.setState(prevState => ({
            [option]: prevState[option] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;

        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;

        if (good === 0) return 0;

        return Number(((good / (good + neutral + bad)) * 100).toFixed());
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={buttons}
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        'No feedback given'
                    )}
                </Section>
            </>
        );
    }
}

export default App;