import { useEffect, useState } from 'react';
import Botoes from '../botoes';
import Carrossel from '../carrossel';
import Contatos from '../contatos';
import Header from '../header';
import Pinturas from '../pinturas';
import TextoPrincipal from '../textoPrincipal';
import textos from '../textos';
import { BoxImagem, CaixaPreta, Pixel } from './styles';

const altura = window.innerHeight;
const largura = window.innerWidth;
const array = Array.from({ length: 100 }, (_, index) => {
    return {
        id: index,
        w: Math.trunc(Math.random() * largura),
        y: Math.trunc(Math.random() * altura),
        aparecer: (Math.random() * 2).toFixed(2),
        tamanho: Math.trunc(Math.random() * 4 + 1),
    }
});

function Page({ pagina }) {
    const [indicePinturas, setIndicePinturas] = useState(0);
    const [mostrarConteudo, setMostrarConteudo] = useState(true);
    const carrossel = (pagina === 'habilidades' || pagina === 'programacao' || pagina === 'design');
    const [sombra, setSombra] = useState(1);

    function mudarIndicePinturas(direcao) {
        if (pagina === 'inicio')
            return

        if (direcao === 'esquerda') {
            if (indicePinturas === 0) {
                return setIndicePinturas(textos.pinturas.cards.length - 1);
            };
            setIndicePinturas(indicePinturas - 1);
        } else {
            if (indicePinturas === textos.pinturas.cards.length - 1) {
                return setIndicePinturas(0);
            };
            setIndicePinturas(indicePinturas + 1);
        };
    }

    function alterarMostrarConteudo() {
        if (!mostrarConteudo)
            setMostrarConteudo(true);
    }

    useEffect(() => {
        setTimeout(() => {
            let contador = 100;
            const intervalId = setInterval(() => {
                contador--;
                setSombra(contador / 100);
                if (contador === 0) {
                    clearInterval(intervalId);
                }
            }, 10);
        }, 4000)
    }, [])

    return (
        <BoxImagem
            sx={!mostrarConteudo && { cursor: 'pointer' }}
            onClick={() => alterarMostrarConteudo()}
            sombra={sombra > 0.5 ? sombra : 0.5}
            image={pagina === 'pinturas' ? textos.pinturas.cards[indicePinturas].foto : textos[pagina].foto}
        >
            {sombra > 0 && (
                <CaixaPreta sombra={sombra}>
                    {array.map(({ aparecer, id, w, y, tamanho }) => (
                        <Pixel
                            aparecer={aparecer}
                            key={id}
                            sx={{
                                position: 'absolute',
                                width: `${tamanho}px`,
                                height: `${tamanho}px`,
                                top: `${y}px`,
                                left: `${w}px`,
                                backgroundColor: 'white',
                            }}
                        />
                    ))}
                </CaixaPreta>
            )}
            <Header texto={!mostrarConteudo ? 'Clique na tela para voltar' : ''} pagina={pagina} />
            <TextoPrincipal pagina={pagina} />
            {carrossel ? (
                <Carrossel pagina={pagina} />
            ) : pagina === 'pinturas' || pagina === 'inicio' ? (
                <Pinturas
                    pagina={pagina}
                    setMostrarConteudo={setMostrarConteudo}
                    mostrarConteudo={mostrarConteudo}
                    indicePinturas={indicePinturas}
                    mudarIndicePinturas={mudarIndicePinturas}
                />
            ) : (
                <Botoes pagina={pagina} />
            )}
            <Contatos />
        </BoxImagem>
    );
};

export default Page;
