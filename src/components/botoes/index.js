import { useNavigate } from 'react-router-dom';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { BoxBotoes, BoxTextos, TextoComBorda } from '../styles';
import textos from '../textos';
import { Box, Link } from '@mui/material';
import iconeLink from '../../svg/link.svg';

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
                    <TextoComBorda
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                        variant='title'
                        color='primary'
                        pointer='true'
                    >
                        <img alt='icone entrar no link' src={iconeLink} />
                        {textos[pagina].opcao1}
                    </TextoComBorda>
                </BoxTextos>
            </Link>
            <Link width='100%'>
                <BoxTextos onClick={() => navigate(link2)} pointer='true'>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem'
                    }}
                    >
                        <img alt='icone entrar no link' src={iconeLink} />
                        <TextoComBorda
                            variant='title'
                            color='primary'
                            pointer='true'
                        >
                            {textos[pagina].opcao2}
                        </TextoComBorda>

                    </Box>
                </BoxTextos>
            </Link>
        </BoxBotoes>
    );
};

export default Botoes;
