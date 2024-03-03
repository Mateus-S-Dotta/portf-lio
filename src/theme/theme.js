import { createTheme } from '@mui/material';

export const sizeWidth = window.innerWidth < 450;
export const sizeHeight = window.innerHeight < 450;
export const sizeWidthFonte = window.innerWidth < 700;
export const sizeHeightFonte = window.innerHeight < 500;

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fff'
        },
        secondary: {
            main: '#000'
        }
    },
    typography: {
        title: {
            fontFamily: 'Bruno Ace',
            fontWeight: 400,
            fontSize: sizeWidthFonte || sizeHeightFonte ? '2rem' : '3.2rem',
            lineHeight: sizeWidthFonte || sizeHeightFonte ? '2rem' : '3.2rem',
        },
        subTitle: {
            fontFamily: 'Bruno Ace',
            fontWeight: 400,
            fontSize: sizeWidthFonte || sizeHeightFonte ? '1.6rem' : '2.4rem',
            lineHeight: sizeWidthFonte || sizeHeightFonte ? '1.6rem' : '2.4rem',
        },
        text: {
            fontFamily: 'Bruno Ace',
            fontWeight: 400,
            fontSize: sizeWidthFonte || sizeHeightFonte ? '1.2rem' : '1.6rem',
            lineHeight: sizeWidthFonte || sizeHeightFonte ? '1.2rem' : '1.6rem',
        }
    },
    animationTime: 500,
    initionTime: 1500
});
