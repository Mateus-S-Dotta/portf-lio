import { Link } from '@mui/material';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { TextoComBorda } from '../styles';
import { BoxCard, BoxConteudo } from './styles';

function Card({ titulo, foto, texto, link, variant }) {
    return (
        <BoxCard tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''} borda={link ? 'true' : ''}>
            <Link href={link ? link : '#'} sx={{
                textDecoration: link ? '' : 'none',
                cursor: link ? 'pointer' : 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '3.2rem'
            }}>
                <TextoComBorda variant='title' color='primary'>
                    {titulo}
                </TextoComBorda>
                <BoxConteudo tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''}>
                    {variant === 'title' && (
                        <img style={{ maxWidth: '26.8rem', maxHeight: '16.4rem', width: '50vw' }} src={foto} alt='foto do card' />
                    )}
                    <TextoComBorda width='100%' variant={variant} color='primary'>
                        {texto}
                    </TextoComBorda>
                </BoxConteudo>
            </Link>
        </BoxCard>
    );
};

export default Card;
