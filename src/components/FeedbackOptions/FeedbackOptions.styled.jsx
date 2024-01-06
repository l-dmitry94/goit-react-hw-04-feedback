import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
    display: flex;
    gap: 14px;
`;

export const Button = styled.button`
    width: 64px;
    height: 32px;
    color: #fafafa;
    border-radius: 10px;
    background-color: #a1a1a1;
    transition: background-color .3s linear;

    &:is(:hover, :focus) {
        background-color: #908686;
    }
`;
