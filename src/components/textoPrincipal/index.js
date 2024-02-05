import { BoxTextos, TextoComBorda } from '../styles';
import textos from '../textos';

function TextoPrincipal({ pagina }) {
    return (
        <BoxTextos>
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
