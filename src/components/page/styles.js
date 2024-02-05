import { Box, styled } from '@mui/material';

const BoxImagem = styled(Box)`
    box-shadow: inset 0 0 0 10000px rgba(0, 0, 0, ${(props) => (props.sombra)});
    background-image: url(${(props) => (props.image)});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
`;

export {
    BoxImagem
};
