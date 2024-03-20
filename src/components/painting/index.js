import { Link } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import arrowRight from '../../svg/arrowRight.svg';
import arrowLeft from '../../svg/arrowLeft.svg';
import { sizeHeight, sizeWidth } from '../../theme/theme';
import { BoxCarousel, BoxCenter, BoxContent, BoxTexts, BorderText } from '../styles';
import texts from '../texts';
import InitionButton from './styles';
const currentSize = (window.innerHeight - 75 - 125 - 16 - 16) / 2;

function Painting({ changeIndexPaintings, indexPaintings, setShowContent, showContent, page }) {
    const textBar = useRef(null);
    const [styleBar, setStyleBar] = useState({
        ready: false,
        style: {
            maxHeight: `${currentSize}px`
        }
    });

    useEffect(() => {
        if (styleBar.ready === false) {
            setStyleBar({
                ready: true,
                style: {
                    maxHeight: `${currentSize}px`,
                }
            });
        }
        if (styleBar.ready && textBar.current) {
            const currentHeight = textBar.current.offsetHeight;
            setStyleBar({
                style: {
                    maxHeight: `${currentSize}px`,
                    overflowY: currentHeight >= currentSize ? 'auto' : 'hidden',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#fff #00000000',
                    paddingRight: '0.4rem',
                    display: 'inline-block',
                    width: '100%'
                }
            });
        }
    }, [styleBar, changeIndexPaintings]);

    return (
        <BoxCenter sizeheight={sizeHeight ? 'true' : ''} sizewidth={sizeWidth ? 'true' : ''}>
            {showContent && (
                <BoxCarousel sizeheight={sizeHeight ? 'true' : ''} sizewidth={sizeWidth ? 'true' : ''}>
                    {page === 'pinturas' && (
                        <img
                            onClick={() => changeIndexPaintings('left')}
                            className='hover'
                            src={arrowLeft}
                            alt='flecha para esquerda'
                        />
                    )}
                    <BoxContent
                        sizeheight={sizeHeight ? 'true' : ''}
                        sizewidth={sizeWidth ? 'true' : ''}
                        flexDirection='column'
                    >
                        <BorderText variant='title' color='primary'>
                            {texts[page].cards[indexPaintings] ? (
                                texts[page].cards[indexPaintings].title
                            ) : (
                                ''
                            )}
                        </BorderText>
                        <BorderText
                            ref={textBar}
                            sx={styleBar.style}
                            variant='subTitle'
                            color='primary'
                        >
                            {texts[page].cards[indexPaintings] ? (
                                texts[page].cards[indexPaintings].text
                            ) : (
                                ''
                            )}
                        </BorderText>
                        {page === 'pinturas' ? (
                            <Link>
                                <BorderText
                                    onClick={() => setShowContent(false)}
                                    pointer='true'
                                    variant='title'
                                    color='primary'
                                >
                                    Clique para ver a imagem
                                </BorderText>
                            </Link>
                        ) : (
                            <BoxTexts gap='0.8rem'>
                                <InitionButton text='Habilidades' link='habilidades' />
                                <InitionButton text='Projetos de Design' link='design' />
                                <InitionButton text='Projetos de Programação' link='programacao' />
                                <InitionButton text='Pinturas' link='pinturas' />
                            </BoxTexts>
                        )}
                    </BoxContent>
                    {page === 'pinturas' && (
                        <img
                            onClick={() => changeIndexPaintings('')}
                            className='hover'
                            src={arrowRight}
                            alt='flecha para direita'
                        />
                    )}
                </BoxCarousel>
            )}
        </BoxCenter>
    );
}

export default Painting;