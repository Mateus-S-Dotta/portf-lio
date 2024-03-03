import { Box, styled } from '@mui/material';

const BoxHeader = styled(Box)`
    padding: ${({ sizeheight, sizewidth }) => ((!sizewidth === 'true' || !sizeheight === 'true') ? '1.6rem 6.4rem 3.2rem 6.4rem' : '1.6rem 6.4rem')};
    z-index: 10000;
`;

export {
    BoxHeader
};

