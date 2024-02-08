import { tamanhoHeight, tamanhoHeightFonte, tamanhoWidth, tamanhoWidthFonte } from '../../theme/theme';
import Card from '../card';
import { BoxCarrossel, BoxCentralizar, BoxConteudo } from '../styles';
import textos from '../textos';

function Carrossel({ pagina }) {
    const tamanho = (tamanhoWidthFonte || tamanhoHeightFonte ? (window.innerHeight - 64 - 64 - 125) : (window.innerHeight - 64 - 64 - 125 - 64));

    function impedirPropagacao(e) {
        e.stopPropagation();
    }


    return (
        <BoxCentralizar tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''}>
            <BoxCarrossel>
                <BoxConteudo onWheel={(e) => impedirPropagacao(e)} scroll='true' height={tamanho}>
                    {textos[pagina].cards.map(({ titulo, texto, foto, link }, indice) => (
                        <Card
                            key={indice}
                            variant={(pagina === 'curiosidades' || pagina === 'habilidades') ? 'subTitle' : 'title'}
                            titulo={titulo}
                            texto={texto}
                            foto={foto}
                            link={link}
                        />
                    ))}
                </BoxConteudo>
            </BoxCarrossel>
        </BoxCentralizar>
    );
};

export default Carrossel;
