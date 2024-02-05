import { Box, styled } from '@mui/material';

const BoxCard = styled(Box)`
    max-width: 58.6rem;
    height: 26rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3.2rem;
    border: ${({ borda }) => (borda && ('#fff 1px solid'))};
    padding: 1.6rem;
    &:hover {
        cursor: ${({ borda }) => (borda && ('pointer'))};
    }
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
