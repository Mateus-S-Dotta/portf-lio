import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Botoes from '../botoes';
import Carrossel from '../carrossel';
import Contatos from '../contatos';
import Header from '../header';
import RoleParaBaixo from '../roleParaBaixo';
import TextoPrincipal from '../textoPrincipal';
import textos from '../textos';
import { BoxImagem } from './styles';
import Pinturas from '../pinturas';

function Page({ pagina }) {
    const [passos, setPassos] = useState(0);
    const [edicao, setEdicao] = useState(false);
    const [indicePinturas, setIndicePinturas] = useState(0);
    const [mostrarConteudo, setMostrarConteudo] = useState(true);
    const carrossel = (pagina === 'curiosidades' || pagina === 'habilidades' || pagina === 'programacao' || pagina === 'design');
    const sombra = passos === 1 || !mostrarConteudo ? 0.2 : passos === 2 ? 0.45 : 0.7;
    const location = useLocation();

    useEffect(() => {
        setPassos(0);
        setEdicao(false);
        return () => {
            setPassos(0);
            setEdicao(false);
        }
    }, [location.pathname]);

    function mudarIndicePinturas(direcao) {
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

    function rolamento(e) {
        if (edicao || !mostrarConteudo) {
            return
        };
        if (e.deltaY > 0 && passos < 3) {
            setPassos(passos + 1);
            setEdicao(true);
            setTimeout(() => {
                setEdicao(false);
            }, 1000);
        } else if (e.deltaY < 0 && passos > 1) {
            setPassos(passos - 1);
            setEdicao(true);
            setTimeout(() => {
                setEdicao(false);
            }, 1000);
        };
    };

    return (
        <BoxImagem
            sx={!mostrarConteudo && { '&:hover': { cursor: 'pointer' } }}
            onClick={() => alterarMostrarConteudo()}
            sombra={sombra}
            image={pagina === 'pinturas' ? textos.pinturas.cards[indicePinturas].foto : textos[pagina].foto}
            onWheel={(e) => rolamento(e)}
        >
            <Header pagina={pagina} />
            {mostrarConteudo ? ((passos > 1) && (
                <TextoPrincipal pagina={pagina} />
            )) : (
                <Box />
            )}
            {((passos === 3) && (
                carrossel ? (
                    <Carrossel pagina={pagina} />
                ) : pagina === 'pinturas' ? (
                    <Pinturas
                        setMostrarConteudo={setMostrarConteudo}
                        mostrarConteudo={mostrarConteudo}
                        indicePinturas={indicePinturas}
                        mudarIndicePinturas={mudarIndicePinturas}
                    />
                ) : (
                    <Botoes pagina={pagina} />
                )
            ))}
            {mostrarConteudo && (passos === 3 ? (
                <Contatos />
            ) : (
                <Box sx={{ '&:hover': { cursor: 'pointer' } }} onClick={() => setPassos(passos + 1)}>
                    <RoleParaBaixo />
                </Box>
            ))}
        </BoxImagem>
    );
};

export default Page;
