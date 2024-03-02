import { Box, keyframes, styled } from '@mui/material';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const BoxImagem = styled(Box)`
    box-shadow: inset 0 0 0 10000px rgba(0, 0, 0, ${({ sombra }) => (sombra)});
    background-image: url(${({ image }) => (image)});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
`;

const CaixaPreta = styled(Box)`
    position: absolute;
    width: 100vw;
    height: 100vh; 
    background-color: black;
    overflow-y: hidden;
    overflow-x: hidden;
    opacity: ${({ sombra }) => (sombra)};
`;

const Pixel = styled(Box)`
    animation: ${fadeIn} ${({ aparecer }) => (aparecer < 0.25 ? 0.25 : aparecer)}s linear infinite alternate;
`;

export {
    BoxImagem,
    CaixaPreta,
    Pixel
};

