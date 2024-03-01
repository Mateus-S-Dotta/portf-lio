import { Box, Typography, css, keyframes, styled } from '@mui/material';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const TextoComBorda = styled(Typography)`
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    text-align: center;
    cursor: ${({ pointer }) => (pointer === 'true' ? 'pointer' : 'auto')};
`;

const TextoComIcone = styled(TextoComBorda)`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;

const BoxBotoes = styled(Box)`
    width: 100%;
    display: flex;
    opacity: ${({ aparecer }) => (aparecer ? 1 : 0)};
    ${({ aparecer }) => (aparecer === 'true' && css`
        animation: ${fadeIn} 1s forwards;
    `)}
`;

const BoxTextos = styled(BoxBotoes)`
    align-items: center;
    flex-direction: column;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    cursor: ${({ pointer }) => (pointer === 'true' ? 'pointer' : 'auto')};
`;

const BoxFooter = styled(BoxTextos)`
    position: absolute;
    bottom: 0;
    min-height: ${({ tamanhowidth, tamanhoheight }) => (tamanhowidth || tamanhoheight ? '10.6rem' : '12.5rem')};
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
    opacity: ${({ aparecer }) => (aparecer ? 1 : 0)};
    ${({ aparecer }) => (aparecer === 'true' && css`
        animation: ${fadeIn} 1s forwards;
    `)}
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-left: ${({ tamanhowidth, tamanhoheight }) => (tamanhowidth || tamanhoheight ? '1.6rem' : '4.8rem')};
    padding-right: ${({ tamanhowidth, tamanhoheight }) => (tamanhowidth || tamanhoheight ? '1.6rem' : '4.8rem')};
    opacity: ${({ aparecer }) => (aparecer ? 1 : 0)};
    ${({ aparecer }) => (aparecer === 'true' && css`
        animation: ${fadeIn} 1s forwards;
    `)}
`;

const BoxConteudo = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${({ tamanhowidth, tamanhoheight }) => (tamanhowidth || tamanhoheight ? '0.8rem' : '1.6rem')};
    text-align: center;
    overflow-y: ${({ scroll }) => (scroll ? 'auto' : 'hidden')};
    scrollbar-width: ${({ scroll }) => (scroll ? 'thin' : '')};
    scrollbar-color: ${({ scroll }) => (scroll ? '#fff #00000000' : '')};
`;

export {
    TextoComBorda,
    BoxFooter,
    BoxTextos,
    BoxBotoes,
    BoxCarrossel,
    BoxConteudo,
    BoxCentralizar,
    TextoComIcone
};
