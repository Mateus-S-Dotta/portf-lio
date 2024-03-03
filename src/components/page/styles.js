import { Box, keyframes, styled } from '@mui/material';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const BoxImage = styled(Box)`
    box-shadow: inset 0 0 0 10000px rgba(0, 0, 0, ${({ shadow }) => (shadow)});
    background-image: url(${({ image }) => (image)});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
`;

const BoxBlack = styled(Box)`
    position: absolute;
    width: 100vw;
    height: 100vh; 
    background-color: black;
    overflow-y: hidden;
    overflow-x: hidden;
    opacity: ${({ shadow }) => (shadow)};
`;

const Pixel = styled(Box)`
    animation: ${fadeIn} ${({ time }) => (time < 0.25 ? 0.25 : time)}s linear infinite alternate;
    position: absolute;
    width: ${({ size }) => (size)}px;
    height: ${({ size }) => (size)}px;
    top: ${({ h }) => (h)}px;
    left: ${({ w }) => (w)}px;
    background-color: white;
`;

export {
    BoxImage,
    BoxBlack,
    Pixel
};

