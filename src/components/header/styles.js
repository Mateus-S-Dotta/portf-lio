import { Box, styled } from '@mui/material';

const BoxHeader = styled(Box)`
    padding: ${(({ tamanhoWidth, tamanhoHeight }) => (!tamanhoWidth || !tamanhoHeight ? '1.6rem 6.4rem 3.2rem 6.4rem' : '1.6rem'))};
    z-index: 5;
`;

export {
    BoxHeader
};
