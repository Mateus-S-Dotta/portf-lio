import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { theme } from './theme/theme';
import Page from './components/page';

export default function MainRoutes() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='*' element={<Page pagina='inicio' />} />
                <Route path='/inicio' element={<Page pagina='inicio' />} />
                <Route path='/trabalhos' element={<Page pagina='trabalhos' />} />
                <Route path='/habilidades' element={<Page pagina='habilidades' />} />
                <Route path='/programacao' element={<Page pagina='programacao' />} />
                <Route path='/design' element={<Page pagina='design' />} />
                <Route path='/pinturas' element={<Page pagina='pinturas' />} />
            </Routes>
        </ThemeProvider>
    )
};
