import { Box, styled } from '@mui/material';

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
    width: 100%;
    height: 100%; 
    background-color: black;
    opacity: ${({ sombra }) => (sombra)};
`;

export {
    BoxImagem,
    CaixaPreta
};
