import { useState } from 'react';
import flechaDireita from '../../svg/flechaDireita.svg';
import flechaEsquerda from '../../svg/flechaEsquerda.svg';
import Card from '../card';
import textos from '../textos';
import { BoxCarrossel, BoxCentralizar, BoxConteudo } from '../styles';

function Carrossel({ pagina }) {
    const [esquerda, setEsquerda] = useState(0);
    const [direita, setDireita] = useState(1);

    function voltarCarrossel() {
        const index = textos[pagina].cards.length - 1;
        let esquerdaAtivo = true;
        let direitoAtivo = true;

        if (esquerda === 0) {
            esquerdaAtivo = false;
            setEsquerda(index);
        }
        if (direita === 0) {
            direitoAtivo = false;
            setDireita(index);
        }

        if (esquerdaAtivo) {
            setEsquerda(esquerda - 1)
        }
        if (direitoAtivo) {
            setDireita(direita - 1);
        }
    }

    function avancarCarrossel() {
        const index = textos[pagina].cards.length - 1;
        let esquerdaAtivo = true;
        let direitoAtivo = true;

        if (esquerda === index) {
            esquerdaAtivo = false;
            setEsquerda(0);
        }
        if (direita === index) {
            direitoAtivo = false;
            setDireita(0);
        }

        if (esquerdaAtivo) {
            setEsquerda(esquerda + 1)
        }
        if (direitoAtivo) {
            setDireita(direita + 1);
        }
    }

    return (
        <BoxCentralizar>
            <BoxCarrossel>
                <img onClick={() => voltarCarrossel()} className='hover' src={flechaEsquerda} alt='flecha para esquerda' />
                <BoxConteudo>
                    <Card
                        variant={(pagina === 'curiosidades' || pagina === 'habilidades') ? 'subTitle' : 'title'}
                        titulo={textos[pagina].cards[esquerda].titulo}
                        texto={textos[pagina].cards[esquerda].texto}
                        foto={textos[pagina].cards[esquerda].foto}
                        link={textos[pagina].cards[esquerda].link}
                    />
                    <Card
                        variant={(pagina === 'curiosidades' || pagina === 'habilidades') ? 'subTitle' : 'title'}
                        titulo={textos[pagina].cards[direita].titulo}
                        texto={textos[pagina].cards[direita].texto}
                        foto={textos[pagina].cards[direita].foto}
                        link={textos[pagina].cards[direita].link}
                    />
                </BoxConteudo>
                <img onClick={() => avancarCarrossel()} className='hover' src={flechaDireita} alt='flecha para direita' />
            </BoxCarrossel>
        </BoxCentralizar>
    );
};

export default Carrossel;
