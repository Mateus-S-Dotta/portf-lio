import { useNavigate } from 'react-router-dom';
import { BoxBotoes, BoxTextos, TextoComBorda } from '../styles';
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
    };

    return (
        <BoxBotoes sx={{ paddingTop: '3.2rem' }}>
            <BoxTextos onClick={() => navigate(link1)} sx={{ '&:hover': { cursor: 'pointer' } }}>
                <TextoComBorda variant='title' color='primary'>
                    {textos[pagina].opcaoLinha1}
                </TextoComBorda>
                <TextoComBorda variant='title' color='primary'>
                    {textos[pagina].opcao1Linha2}
                </TextoComBorda>
            </BoxTextos>
            <BoxTextos onClick={() => navigate(link2)} sx={{ '&:hover': { cursor: 'pointer' } }}>
                <TextoComBorda variant='title' color='primary'>
                    {textos[pagina].opcaoLinha1}
                </TextoComBorda>
                <TextoComBorda variant='title' color='primary'>
                    {textos[pagina].opcao2Linha2}
                </TextoComBorda>
            </BoxTextos>
        </BoxBotoes>
    );
};

export default Botoes;
