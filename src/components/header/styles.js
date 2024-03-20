import { Box, Link, styled } from '@mui/material';

const BoxHeader = styled(Box)`
    padding: ${({ sizeheight, sizewidth }) => ((sizewidth || sizeheight) ? '1.6rem 3.2rem' : '1.6rem 6.4rem')};
    z-index: 10000;
    display: flex;
    justify-content: space-between;
`;

const LinkStyled = styled(Link)`
    display: flex;
    gap: 0.8rem; 
    align-items: center;
`;

export {
    BoxHeader,
    LinkStyled
};

