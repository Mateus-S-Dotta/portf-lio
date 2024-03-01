import { Link } from '@mui/material';
import iconeLink from '../../svg/link.svg';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { BoxBotoes, BoxTextos, TextoComIcone } from '../styles';
import textos from '../textos';

function Botoes({ pagina }) {
    return (
        <BoxBotoes
            sx={{
                paddingTop: tamanhoWidth || tamanhoHeight ? '1.6rem' : '3.2rem',
                flexDirection: tamanhoWidth & !tamanhoHeight ? 'column' : !tamanhoWidth & tamanhoHeight ? 'row' : tamanhoWidth & tamanhoHeight ? 'column' : 'row',
                gap: tamanhoWidth || tamanhoHeight ? '0.8rem' : '3.2rem',
                zIndex: '2'
            }}
        >
            <Link href='/programacao' width='100%'>
                <BoxTextos pointer='true'>
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
            <Link href='/design' width='100%'>
                <BoxTextos pointer='true'>
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
