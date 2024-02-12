import { Box, styled } from '@mui/material';

const BoxCarrossel = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
`;

const BoxCentralizar = styled(Box)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-left: 4.8rem;
    padding-right: 4.8rem;
`;

const BoxConteudo = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.6rem;
    text-align: center;
`;


export {
    BoxCarrossel,
    BoxConteudo,
    BoxCentralizar
};
