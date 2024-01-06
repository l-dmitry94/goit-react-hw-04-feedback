import styled from '@emotion/styled';

export const FeedbackSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 40px;
    }
`;

export const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 20px;
`;
