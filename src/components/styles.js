import { Box, Typography, styled } from '@mui/material';

const BorderText = styled(Typography)`
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    text-align: center;
    cursor: ${({ pointer }) => (pointer === 'true' ? 'pointer' : 'auto')};
`;

const IconText = styled(BorderText)`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;

const BoxButtons = styled(Box)`
    width: 100%;
    display: flex;
`;

const BoxTexts = styled(BoxButtons)`
    align-items: center;
    flex-direction: column;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    cursor: ${({ pointer }) => (pointer === 'true' ? 'pointer' : 'auto')};
`;

const BoxFooter = styled(BoxTexts)`
    position: absolute;
    bottom: 0;
    min-height: ${({ sizeheight, sizewidth }) => (sizewidth || sizeheight ? '10.6rem' : '12.5rem')};
    padding-bottom: 1.6rem;
    gap: 0.4rem;
`;

const BoxCarousel = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ sizeheight, sizewidth }) => ((sizewidth || sizeheight) ? '1.6rem' : '3.2rem')};
`;

const BoxCenter = styled(Box)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-left: ${({ sizeheight, sizewidth }) => (sizewidth || sizeheight ? '1.6rem' : '4.8rem')};
    padding-right: ${({ sizeheight, sizewidth }) => (sizewidth || sizeheight ? '1.6rem' : '4.8rem')};
`;

const BoxContent = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${({ sizeheight, sizewidth }) => ((sizewidth || sizeheight) ? '0.8rem' : '1.6rem')};
    text-align: center;
    overflow-y: ${({ scroll }) => (scroll ? 'auto' : 'hidden')};
    scrollbar-width: ${({ scroll }) => (scroll ? 'thin' : '')};
    scrollbar-color: ${({ scroll }) => (scroll ? '#fff #00000000' : '')};
`;

export {
    BoxButtons,
    BoxCarousel,
    BoxCenter,
    BoxContent,
    BoxFooter,
    BoxTexts,
    BorderText,
    IconText
};

