import { Link } from '@mui/material';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { TextoComBorda } from '../styles';
import { BoxCard, BoxConteudo } from './styles';

function Card({ titulo, foto, texto, link, variant }) {
    return (
        <a style={{ textDecoration: 'none', pointerEvents: !link ? 'none' : '' }} alt='' href={link ? link : ''}>
            <BoxCard tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''} borda={link ? 'true' : ''}>
                <Link sx={{ textDecoration: link ? '' : 'none' }}>
                    <TextoComBorda variant='title' color='primary'>
                        {titulo}
                    </TextoComBorda>
                </Link>
                <BoxConteudo tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''}>
                    {variant === 'title' && (
                        <img style={{ maxWidth: '26.8rem', maxHeight: '16.4rem', width: '50vw' }} src={foto} alt='foto do card' />
                    )}
                    <Link sx={{ textDecoration: link ? '' : 'none' }}>
                        <TextoComBorda sx={{ width: variant === 'title' ? '26.8rem' : '100%', }} variant={variant} color='primary'>
                            {texto}
                        </TextoComBorda>
                    </Link>
                </BoxConteudo>
            </BoxCard>
        </a>
    );
};

export default Card;
