import { Link } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import flechaDireita from '../../svg/flechaDireita.svg';
import flechaEsquerda from '../../svg/flechaEsquerda.svg';
import iconeLink from '../../svg/link.svg';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { BoxCarrossel, BoxCentralizar, BoxConteudo, BoxTextos, TextoComBorda, TextoComIcone } from '../styles';
import textos from '../textos';
const tamanho = (window.innerHeight - 75 - 125 - 16 - 16) / 2;

function Pinturas({ mudarIndicePinturas, indicePinturas, setMostrarConteudo, mostrarConteudo, pagina }) {
    const [valor, setValor] = useState('');
    const textoComBarra = useRef(null);
    const [estiloBarra, setEstiloBarra] = useState({
        ready: false,
        estilo: {
            maxHeight: `${tamanho}px`
        }
    });

    useEffect(() => {
        setTimeout(() => {
            setValor('true');
        }, 3000)
    }, []);

    useEffect(() => {
        if (estiloBarra.ready === false) {
            setEstiloBarra({
                ready: true,
                estilo: {
                    maxHeight: `${tamanho}px`,
                }
            });
        }
        if (estiloBarra.ready && textoComBarra.current) {
            const alturaAtual = textoComBarra.current.offsetHeight;
            setEstiloBarra({
                estilo: {
                    maxHeight: `${tamanho}px`,
                    overflowY: alturaAtual >= tamanho ? 'auto' : 'hidden',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#fff #00000000',
                    paddingRight: '0.4rem',
                    display: 'inline-block',
                    width: '100%'
                }
            });
        }
    }, [estiloBarra, mudarIndicePinturas]);

    return (
        <BoxCentralizar aparecer={valor} tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''}>
            {mostrarConteudo && (
                <BoxCarrossel>
                    {pagina === 'pinturas' && (
                        <img
                            onClick={() => mudarIndicePinturas('esquerda')}
                            className='hover'
                            src={flechaEsquerda}
                            alt='flecha para esquerda'
                        />
                    )}
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
                            sx={estiloBarra.estilo}
                            variant='subTitle'
                            color='primary'
                        >
                            {textos[pagina].cards[indicePinturas] ? (
                                textos[pagina].cards[indicePinturas].texto
                            ) : (
                                ''
                            )}
                        </TextoComBorda>
                        {pagina === 'pinturas' ? (
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
                            <BoxTextos aparecer='false' gap='8px'>
                                <Link href='/habilidades'>
                                    <TextoComIcone
                                        pointer='true'
                                        variant='title'
                                        color='primary'
                                    >
                                        <img width={tamanhoHeight || tamanhoWidth ? '16px' : '32px'} alt='icone entrar no link' src={iconeLink} />
                                        Veja Habilidades
                                    </TextoComIcone>
                                </Link>
                                <Link href='/trabalhos'>
                                    <TextoComIcone
                                        pointer='true'
                                        variant='title'
                                        color='primary'
                                    >
                                        <img width={tamanhoHeight || tamanhoWidth ? '16px' : '32px'} alt='icone entrar no link' src={iconeLink} />
                                        Veja Trabalhos
                                    </TextoComIcone>
                                </Link>
                                <Link href='/pinturas'>
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
                        )}
                    </BoxConteudo>
                    {pagina === 'pinturas' && (
                        <img
                            onClick={() => mudarIndicePinturas('')
                            }
                            className='hover'
                            src={flechaDireita}
                            alt='flecha para direita'
                        />
                    )}
                </BoxCarrossel>
            )}
        </BoxCentralizar>
    );
};

export default Pinturas;