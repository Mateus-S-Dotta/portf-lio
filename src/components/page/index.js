import { useEffect, useState } from 'react';
import { theme } from '../../theme/theme';
import Buttons from '../buttons';
import Carousel from '../carousel';
import Contact from '../contact';
import Header from '../header';
import MainText from '../mainText';
import Paintings from '../paintings';
import texts from '../texts';
import Timer from '../timer';
import { BoxImage, BoxBlack, Pixel } from './styles';

const height = window.innerHeight;
const width = window.innerWidth;
const array = Array.from({ length: 100 }, (_, index) => {
    return {
        id: index,
        w: Math.trunc(Math.random() * width),
        h: Math.trunc(Math.random() * height),
        time: (Math.random() * 2).toFixed(2),
        size: Math.trunc(Math.random() * 4 + 1),
    }
});

function Page({ page }) {
    const [indexPaintings, setindexPaintings] = useState(0);
    const [showContent, setShowContent] = useState(true);
    const carousel = (page === 'habilidades' || page === 'programacao' || page === 'design');
    const [shadow, setShadow] = useState(1);

    function changeIndexPaintings(direction) {
        if (page === 'inicio')
            return

        if (direction === 'left') {
            if (indexPaintings === 0) {
                return setindexPaintings(texts.pinturas.cards.length - 1);
            };
            setindexPaintings(indexPaintings - 1);
        } else {
            if (indexPaintings === texts.pinturas.cards.length - 1) {
                return setindexPaintings(0);
            };
            setindexPaintings(indexPaintings + 1);
        };
    }

    function alterarshowContent() {
        if (!showContent)
            setShowContent(true);
    }

    useEffect(() => {
        setTimeout(() => {
            let number = 100;
            const intervalId = setInterval(() => {
                number--;
                setShadow(number / 100);
                if (number === 0) {
                    clearInterval(intervalId);
                }
            }, page === 'inicio' ? 10 : 5);
        }, page === 'inicio' ? (theme.initionTime + (5 * theme.animationTime)) : ((theme.initionTime + (5 * theme.animationTime)) / 2))
    }, [page])

    return (
        <BoxImage
            sx={!showContent && { cursor: 'pointer' }}
            onClick={() => alterarshowContent()}
            shadow={!showContent ? 0 : shadow > 0.5 ? shadow : 0.5}
            image={page === 'pinturas' ? texts.pinturas.cards[indexPaintings].photo : texts[page].photo}
        >
            {shadow > 0 && (
                <BoxBlack shadow={shadow}>
                    {array.map(({ time, id, w, h, size }) => (
                        <Pixel
                            time={time}
                            key={id}
                            w={w}
                            h={h}
                            size={size}
                        />
                    ))}
                </BoxBlack>
            )}
            <Timer zIndex='true' turn={1} page={page === 'inicio' ? 1 : 2}>
                <Header text={!showContent ? 'Clique na tela para voltar' : ''} page={page} />
            </Timer>
            <Timer turn={2} page={page === 'inicio' ? 1 : 2}>
                <MainText showContent={showContent} page={page} />
            </Timer>
            {carousel ? (
                <Timer turn={3} page={page === 'inicio' ? 1 : 2} absolute={'true'}>
                    <Carousel page={page} />
                </Timer>
            ) : page === 'pinturas' || page === 'inicio' ? (
                <Timer turn={3} page={page === 'inicio' ? 1 : 2} absolute={'true'}>
                    <Paintings
                        page={page}
                        setShowContent={setShowContent}
                        showContent={showContent}
                        indexPaintings={indexPaintings}
                        changeIndexPaintings={changeIndexPaintings}
                    />
                </Timer>
            ) : (
                <Timer turn={3} page={page === 'inicio' ? 1 : 2}>
                    <Buttons page={page} />
                </Timer>
            )}
            <Timer turn={4} page={page === 'inicio' ? 1 : 2}>
                <Contact showContent={showContent} />
            </Timer>
        </BoxImage>
    );
};

export default Page;
