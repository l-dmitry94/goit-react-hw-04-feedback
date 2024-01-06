import { Button, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttons = options.map(button => (
        <li key={button}>
            <Button onClick={onLeaveFeedback}>{button}</Button>
        </li>
    ));

    return <ButtonsList>{buttons}</ButtonsList>;
};
