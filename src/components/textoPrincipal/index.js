import { useEffect, useState } from 'react';
import { BoxTextos, TextoComBorda } from '../styles';
import textos from '../textos';

function TextoPrincipal({ pagina }) {
    const [valor, setValor] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setValor('true');
        }, 2500)
    }, []);

    return (
        <BoxTextos aparecer={valor} zIndex='2'>
            <TextoComBorda variant='title' color='primary'>
                {textos[pagina].linha1}
            </TextoComBorda>
            <TextoComBorda variant='title' color='primary'>
                {textos[pagina].linha2}
            </TextoComBorda>
        </BoxTextos>
    );
};

export default TextoPrincipal;
