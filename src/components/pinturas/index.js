import flechaDireita from '../../svg/flechaDireita.svg';
import flechaEsquerda from '../../svg/flechaEsquerda.svg';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { BoxCarrossel, BoxCentralizar, BoxConteudo, TextoComBorda } from '../styles';
import textos from '../textos';
import { useEffect, useRef, useState } from 'react';

function Pinturas({ mudarIndicePinturas, indicePinturas, setMostrarConteudo, mostrarConteudo }) {
    const tamanho = (window.innerHeight - 75 - 125 - 16 - 16) / 2;
    const textoComBarra = useRef(null);
    const [alturaElemento, setAlturaElemento] = useState(0);
    const estiloBarra = {
        maxHeight: `${tamanho}px`,
        overflowY: alturaElemento >= tamanho ? 'auto' : 'hidden',
        scrollbarWidth: 'thin',
        scrollbarColor: '#fff #00000000',
        paddingRight: '0.4rem',
        display: 'inline-block',
        width: '100%'
    };

    useEffect(() => {
        if (textoComBarra.current) {
            const alturaElemento = textoComBarra.current.offsetHeight;
            setAlturaElemento(alturaElemento);
        }
    }, []);

    function impedirPropagacao(e) {
        e.stopPropagation();
    }

    return (
        <BoxCentralizar tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''}>
            {mostrarConteudo && (
                <BoxCarrossel>
                    <img
                        onClick={() => mudarIndicePinturas('esquerda')}
                        className='hover'
                        src={flechaEsquerda}
                        alt='flecha para esquerda'
                    />
                    <BoxConteudo
                        tamanhoheight={tamanhoHeight ? 'true' : ''}
                        tamanhowidth={tamanhoWidth ? 'true' : ''}
                        flexDirection='column'
                    >
                        <TextoComBorda variant='title' color='primary'>
                            {textos.pinturas.cards[indicePinturas].titulo}
                        </TextoComBorda>
                        <TextoComBorda
                            ref={textoComBarra}
                            onWheel={(e) => impedirPropagacao(e)}
                            sx={estiloBarra}
                            variant='subTitle'
                            color='primary'
                        >
                            {textos.pinturas.cards[indicePinturas].texto}
                        </TextoComBorda>
                        <TextoComBorda
                            onClick={() => setMostrarConteudo(false)}
                            sx={{ '&:hover': { cursor: 'pointer' } }}
                            variant='title'
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