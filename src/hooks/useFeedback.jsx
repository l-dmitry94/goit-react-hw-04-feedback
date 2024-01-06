import { useState } from 'react';

export const useFeedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const leaveFeedback = event => {
        const option = event.target.textContent.toLowerCase();

        switch (option) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    };

    const total = good + neutral + bad;
    const positiveFeedback =
        good !== 0 ? Number(((good / total) * 100).toFixed()) : 0;

    return {
        good,
        neutral,
        bad,
        leaveFeedback,
        total,
        positiveFeedback,
    };
};
