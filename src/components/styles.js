import { Box, Typography, styled } from '@mui/material';

const TextoComBorda = styled(Typography)`
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    text-align: center;
    cursor: ${({ pointer }) => (pointer === 'true' ? 'pointer' : 'auto')};
`;

const BoxBotoes = styled(Box)`
    width: 100%;
    display: flex;
`;

const BoxTextos = styled(BoxBotoes)`
    align-items: center;
    flex-direction: column;
    padding-right: 1.6rem;
    padding-left: 1.6rem;
    cursor: ${({ pointer }) => (pointer === 'true' ? 'pointer' : 'auto')};
`;

const BoxFooter = styled(BoxTextos)`
    position: absolute;
    bottom: 0;
    min-height: ${(({ tamanhowidth, tamanhoheight }) => (tamanhowidth || tamanhoheight ? '10.6rem' : '12.5rem'))};
    padding-bottom: 1.6rem;
    gap: 0.4rem;
`;

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
    padding-left: ${(({ tamanhowidth, tamanhoheight }) => (tamanhowidth || tamanhoheight ? '1.6rem' : '4.8rem'))};
    padding-right: ${(({ tamanhowidth, tamanhoheight }) => (tamanhowidth || tamanhoheight ? '1.6rem' : '4.8rem'))};
`;

const BoxConteudo = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${(({ tamanhowidth, tamanhoheight }) => (tamanhowidth || tamanhoheight ? '0.8rem' : '1.6rem'))};
    text-align: center;
    overflow-y: ${(({ scroll }) => (scroll ? 'auto' : 'hidden'))};
    scrollbar-width: ${(({ scroll }) => (scroll ? 'thin' : ''))};
    scrollbar-color: ${(({ scroll }) => (scroll ? '#fff #00000000' : ''))};

`;


export {
    TextoComBorda,
    BoxFooter,
    BoxTextos,
    BoxBotoes,
    BoxCarrossel,
    BoxConteudo,
    BoxCentralizar
};
