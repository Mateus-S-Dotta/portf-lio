import flechaDireita from '../../svg/flechaDireita.svg';
import flechaEsquerda from '../../svg/flechaEsquerda.svg';
import { BoxCarrossel, BoxCentralizar, BoxConteudo, TextoComBorda } from '../styles';
import textos from '../textos';

function Pinturas({ mudarIndicePinturas, indicePinturas, setMostrarConteudo, mostrarConteudo }) {
    const tamanho = (window.innerHeight - 75 - 125 - 16 - 16) / 2;
    console.log(tamanho)
    const estiloBarra = {
        maxHeight: `${tamanho}px`,
        overflowY: window.innerWidth < 862 ? 'auto' : 'hidden',
        scrollbarWidth: 'thin',
        scrollbarColor: '#fff #00000000',
        paddingRight: '4px',
        display: 'inline-block',
        width: '100%'
    }
    // 72+ 125
    const impedirPropagacao = (event) => {
        event.stopPropagation();
    };

    return (
        <BoxCentralizar>
            {mostrarConteudo && (
                <BoxCarrossel>
                    <img
                        onClick={() => mudarIndicePinturas('esquerda')}
                        className='hover'
                        src={flechaEsquerda}
                        alt='flecha para esquerda'
                    />
                    <BoxConteudo flexDirection='column'>
                        <TextoComBorda variant={window.innerWidth < 390 ? 'subTitle' : 'title'} color='primary'>
                            {textos.pinturas.cards[indicePinturas].titulo}
                        </TextoComBorda>
                        <TextoComBorda onWheel={impedirPropagacao} sx={estiloBarra} variant={window.innerWidth < 390 ? 'text' : 'subTitle'} color='primary'>
                            {textos.pinturas.cards[indicePinturas].texto}
                        </TextoComBorda>
                        <TextoComBorda
                            onClick={() => setMostrarConteudo(false)}
                            sx={{ '&:hover': { cursor: 'pointer' } }}
                            variant={window.innerWidth < 390 ? 'subTitle' : 'title'}
                            color='primary'
                        >
                            Clique para ver a imagem
                        </TextoComBorda>
                    </BoxConteudo>
                    <img onClick={() => mudarIndicePinturas('')} className='hover' src={flechaDireita} alt='flecha para direita' />
                </BoxCarrossel>
            )}
        </BoxCentralizar>
    );
};

export default Pinturas;