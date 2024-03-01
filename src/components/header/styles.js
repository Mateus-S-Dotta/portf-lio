import { Box, css, keyframes, styled } from '@mui/material';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const BoxHeader = styled(Box)`
    padding: ${({ tamanhoWidth, tamanhoHeight }) => (!tamanhoWidth || !tamanhoHeight ? '1.6rem 6.4rem 3.2rem 6.4rem' : '1.6rem')};
    opacity: ${({ aparecer }) => (aparecer ? 1 : 0)};
    ${({ aparecer }) => (aparecer === 'true' && css`
        animation: ${fadeIn} 1s forwards;
    `)}
    z-index: 10000;
`;

export {
    BoxHeader
};

