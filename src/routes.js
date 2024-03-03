import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { theme } from './theme/theme';
import Page from './components/page';

export default function MainRoutes() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='*' element={<Page page='inicio' />} />
                <Route path='/inicio' element={<Page page='inicio' />} />
                <Route path='/trabalhos' element={<Page page='trabalhos' />} />
                <Route path='/habilidades' element={<Page page='habilidades' />} />
                <Route path='/programacao' element={<Page page='programacao' />} />
                <Route path='/design' element={<Page page='design' />} />
                <Route path='/pinturas' element={<Page page='pinturas' />} />
            </Routes>
        </ThemeProvider>
    )
};
