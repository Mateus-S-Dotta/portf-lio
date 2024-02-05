import { useNavigate } from 'react-router-dom';
import { TextoComBorda } from '../styles';
import { BoxCard, BoxConteudo } from './styles';

function Card({ titulo, foto, texto, link, variant }) {
    const navigate = useNavigate();
    function navegar() {
        if (link[0] === '/')
            return navigate(link);
        if (link[0] === 'h')
            return window.location.href = link;
    }

    return (
        <BoxCard onClick={() => navegar()} borda={link ? 'true' : ''}>
            <TextoComBorda variant='title' color='primary'>
                {titulo}
            </TextoComBorda>
            <BoxConteudo>
                {variant === 'title' && (
                    <img style={{ width: '26.8rem', height: '16.4rem' }} src={foto} alt='foto do card' />
                )}
                <TextoComBorda sx={{ width: variant === 'title' ? '26.8rem' : '100%', }} variant={variant} color='primary'>
                    {texto}
                </TextoComBorda>
            </BoxConteudo>
        </BoxCard>
    );
};

export default Card;
