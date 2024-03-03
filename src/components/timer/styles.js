import { Box, css, keyframes, styled } from '@mui/material';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const BoxAinimation = styled(Box)`
    z-index: ${({ zIndex }) => (zIndex ? 10000 : 2)};
    opacity: ${({ show }) => (show ? 1 : 0)};
    ${({ show }) => (show === 'true' && css`
        animation: ${fadeIn} 1s forwards;
    `)}
    ${({ absolute }) => (absolute === 'true' && css`
        position: absolute;
        height: 100vh;
        width: 100vw;
    `)}
`;

export {
    BoxAinimation
};

