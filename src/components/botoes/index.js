import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import iconeLink from '../../svg/link.svg';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { BoxBotoes, BoxTextos, TextoComIcone } from '../styles';
import textos from '../textos';

function Botoes({ pagina }) {
    const navigate = useNavigate();
    let link1;
    let link2;

    if (pagina === 'inicio') {
        link1 = '/sobremim';
        link2 = '/trabalhos';
    } else if (pagina === 'sobremim') {
        link1 = '/curiosidades';
        link2 = '/habilidades';
    } else if (pagina === 'trabalhos') {
        link1 = '/programacao';
        link2 = '/design';
    }

    return (
        <BoxBotoes
            sx={{
                paddingTop: tamanhoWidth || tamanhoHeight ? '1.6rem' : '3.2rem',
                flexDirection: tamanhoWidth & !tamanhoHeight ? 'column' : !tamanhoWidth & tamanhoHeight ? 'row' : tamanhoWidth & tamanhoHeight ? 'column' : 'row',
                gap: tamanhoWidth || tamanhoHeight ? '0.8rem' : '3.2rem'
            }}
        >
            <Link width='100%'>
                <BoxTextos onClick={() => navigate(link1)} pointer='true'>
                    <TextoComIcone
                        variant='title'
                        color='primary'
                        pointer='true'
                    >
                        <img alt='icone entrar no link' src={iconeLink} />
                        {textos[pagina].opcao1}
                    </TextoComIcone>
                </BoxTextos>
            </Link>
            <Link width='100%'>
                <BoxTextos onClick={() => navigate(link2)} pointer='true'>
                    <TextoComIcone
                        variant='title'
                        color='primary'
                        pointer='true'
                    >
                        <img alt='icone entrar no link' src={iconeLink} />
                        {textos[pagina].opcao2}
                    </TextoComIcone>
                </BoxTextos>
            </Link>
        </BoxBotoes>
    );
};

export default Botoes;
