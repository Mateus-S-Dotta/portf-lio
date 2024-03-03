import { Box, Link, styled } from '@mui/material';

const BoxCard = styled(Box)`
    max-width: 58.6rem;
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: ${({ border }) => (border && ('#fff 1px solid'))};
    padding: 1.6rem;
    cursor: ${({ border }) => (border ? 'pointer' : 'auto')};
`;

const StyledLink = styled(Link)`
    text-decoration: ${({ link }) => (link ? '' : 'none')};
    cursor: ${({ link }) => (link ? 'pointer' : 'auto')};
    display: flex;
    flex-direction: column;
    gap: ${({ sizeheight, sizewidth }) => ((sizewidth === 'true' || sizeheight === 'true') ? '1.6rem' : '3.2rem')};
`;

export {
    BoxCard,
    StyledLink
};
