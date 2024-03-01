import { Box, styled } from '@mui/material';

const BoxCard = styled(Box)`
    max-width: 58.6rem;
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({ tamanhoheight, tamanhowidth }) => (tamanhoheight || tamanhowidth ? '0.8rem' : '3.2rem')};
    border: ${({ borda }) => (borda && ('#fff 1px solid'))};
    padding: 1.6rem;
    cursor: ${({ borda }) => (borda ? 'pointer' : 'auto')};
`;

const BoxConteudo = styled(Box)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.6rem;
`;

export {
    BoxCard,
    BoxConteudo
};
