import { sizeHeight, sizeHeightFonte, sizeWidth, sizeWidthFonte } from '../../theme/theme';
import Card from '../card';
import { BoxCarousel, BoxCenter, BoxContent } from '../styles';
import texts from '../texts';

function Carousel({ page }) {
    const size = (sizeWidthFonte || sizeHeightFonte ? (window.innerHeight - 64 - 64 - 125) : (window.innerHeight - 64 - 64 - 125 - 64));

    return (
        <BoxCenter sizeheight={sizeHeight ? 'true' : ''} sizewidth={sizeWidth ? 'true' : ''}>
            <BoxCarousel>
                <BoxContent sizeheight={sizeHeight ? 'true' : ''} sizewidth={sizeWidth ? 'true' : ''} scroll='true' height={size}>
                    {texts[page].cards.map(({ title, text, photo, link }, indice) => (
                        <Card
                            key={indice}
                            variant={page === 'habilidades' ? 'subTitle' : 'title'}
                            title={title}
                            text={text}
                            photo={photo}
                            link={link}
                        />
                    ))}
                </BoxContent>
            </BoxCarousel>
        </BoxCenter>
    );
};

export default Carousel;
