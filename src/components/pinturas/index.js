import { Link } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import flechaDireita from '../../svg/flechaDireita.svg';
import flechaEsquerda from '../../svg/flechaEsquerda.svg';
import iconeLink from '../../svg/link.svg';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { BoxCarrossel, BoxCentralizar, BoxConteudo, BoxTextos, TextoComBorda, TextoComIcone } from '../styles';
import textos from '../textos';

function Pinturas({ mudarIndicePinturas, indicePinturas, setMostrarConteudo, mostrarConteudo, pagina }) {
    const navigate = useNavigate();
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
    }, [mudarIndicePinturas]);

    function impedirPropagacao(e) {
        e.stopPropagation();
    }

    return (
        <BoxCentralizar tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''}>
            {mostrarConteudo && (
                <BoxCarrossel>
                    {
                        pagina === 'pinturas' && (
                            <img
                                onClick={() => mudarIndicePinturas('esquerda')}
                                className='hover'
                                src={flechaEsquerda}
                                alt='flecha para esquerda'
                            />
                        )
                    }
                    <BoxConteudo
                        tamanhoheight={tamanhoHeight ? 'true' : ''}
                        tamanhowidth={tamanhoWidth ? 'true' : ''}
                        flexDirection='column'
                    >
                        <TextoComBorda variant='title' color='primary'>
                            {textos[pagina].cards[indicePinturas] ? (
                                textos[pagina].cards[indicePinturas].titulo
                            ) : (
                                ''
                            )}
                        </TextoComBorda>
                        <TextoComBorda
                            ref={textoComBarra}
                            onWheel={(e) => impedirPropagacao(e)}
                            sx={estiloBarra}
                            variant='subTitle'
                            color='primary'
                        >
                            {textos[pagina].cards[indicePinturas] ? (
                                textos[pagina].cards[indicePinturas].texto
                            ) : (
                                ''
                            )}
                        </TextoComBorda>
                        {
                            pagina === 'pinturas' ? (
                                <Link>
                                    <TextoComBorda
                                        onClick={() => setMostrarConteudo(false)}
                                        pointer='true'
                                        variant='title'
                                        color='primary'
                                    >
                                        Clique para ver a imagem
                                    </TextoComBorda>
                                </Link>
                            ) : (
                                <BoxTextos gap='8px'>
                                    <Link onClick={() => navigate('/habilidades')}>
                                        <TextoComIcone
                                            pointer='true'
                                            variant='title'
                                            color='primary'
                                        >
                                            <img width={tamanhoHeight || tamanhoWidth ? '16px' : '32px'} alt='icone entrar no link' src={iconeLink} />
                                            Veja Habilidades
                                        </TextoComIcone>
                                    </Link>
                                    <Link onClick={() => navigate('/trabalhos')}>
                                        <TextoComIcone
                                            pointer='true'
                                            variant='title'
                                            color='primary'
                                        >
                                            <img width={tamanhoHeight || tamanhoWidth ? '16px' : '32px'} alt='icone entrar no link' src={iconeLink} />
                                            Veja Trabalhos
                                        </TextoComIcone>
                                    </Link>
                                    <Link onClick={() => navigate('/pinturas')}>
                                        <TextoComIcone
                                            pointer='true'
                                            variant='title'
                                            color='primary'
                                        >
                                            <img width={tamanhoHeight || tamanhoWidth ? '16px' : '32px'} alt='icone entrar no link' src={iconeLink} />
                                            Veja as Pinturas
                                        </TextoComIcone>
                                    </Link>
                                </BoxTextos>
                            )
                        }
                    </BoxConteudo>
                    {
                        pagina === 'pinturas' && (
                            <img
                                onClick={() => mudarIndicePinturas('')
                                }
                                className='hover'
                                src={flechaDireita}
                                alt='flecha para direita'
                            />
                        )
                    }
                </BoxCarrossel>
            )}
        </BoxCentralizar>
    );
};

export default Pinturas;