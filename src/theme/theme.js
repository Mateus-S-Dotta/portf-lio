import { createTheme } from '@mui/material';

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
            fontSize: '3.2rem',
            lineHeight: '3.2rem'
        },
        subTitle: {
            fontFamily: 'Bruno Ace',
            fontWeight: 400,
            fontSize: '2.4rem',
            lineHeight: '2.4rem'
        },
        text: {
            fontFamily: 'Bruno Ace',
            fontWeight: 400,
            fontSize: '1.2rem',
            lineHeight: '1.2rem'
        }
    }
});
