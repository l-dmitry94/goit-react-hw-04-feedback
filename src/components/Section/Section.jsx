import { FeedbackSection, Title } from "./Section.styled";

export const Section = ({ title, children }) => {
    return (
        <FeedbackSection>
            <Title>{title}</Title>
            {children}
        </FeedbackSection>
    );
};
