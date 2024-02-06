import { createTheme } from '@mui/material';

export const tamanhoWidth = window.innerWidth < 450;
export const tamanhoHeight = window.innerHeight < 450;
const tamanhoWidthFonte = window.innerWidth < 700;
const tamanhoHeightFonte = window.innerHeight < 700;
console.log(tamanhoWidth, tamanhoHeight)

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
            fontSize: tamanhoWidthFonte || tamanhoHeightFonte ? '2rem' : '3.2rem',
            lineHeight: tamanhoWidthFonte || tamanhoHeightFonte ? '2rem' : '3.2rem',
        },
        subTitle: {
            fontFamily: 'Bruno Ace',
            fontWeight: 400,
            fontSize: tamanhoWidthFonte || tamanhoHeightFonte ? '1.6rem' : '2.4rem',
            lineHeight: tamanhoWidthFonte || tamanhoHeightFonte ? '1.6rem' : '2.4rem',
        },
        text: {
            fontFamily: 'Bruno Ace',
            fontWeight: 400,
            fontSize: tamanhoWidthFonte || tamanhoHeightFonte ? '1.2rem' : '1.6rem',
            lineHeight: tamanhoWidthFonte || tamanhoHeightFonte ? '1.2rem' : '1.6rem',
        }
    }
});
