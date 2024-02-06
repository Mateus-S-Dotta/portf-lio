import { TextoComBorda } from '../styles';
import { BoxCard, BoxConteudo } from './styles';

function Card({ titulo, foto, texto, link, variant }) {
    return (
        <a style={{ textDecoration: 'none' }} href={link}>
            <BoxCard borda={link ? 'true' : ''}>
                <TextoComBorda variant='title' color='primary'>
                    {titulo}
                </TextoComBorda>
                <BoxConteudo>
                    {variant === 'title' && (
                        <img style={{ maxWidth: '26.8rem', maxHeight: '16.4rem', height: '25vh' }} src={foto} alt='foto do card' />
                    )}
                    <TextoComBorda sx={{ width: variant === 'title' ? '26.8rem' : '100%', }} variant={variant} color='primary'>
                        {texto}
                    </TextoComBorda>
                </BoxConteudo>
            </BoxCard>
        </a>
    );
};

export default Card;
