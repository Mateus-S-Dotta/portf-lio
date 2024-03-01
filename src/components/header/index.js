import { Link } from '@mui/material';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { TextoComBorda } from '../styles';
import { BoxHeader } from './styles';
import { useEffect, useState } from 'react';

function Header({ texto, pagina }) {
    const [valor, setValor] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setValor('true');
        }, 2000)
    }, []);

    return (
        <BoxHeader aparecer={valor} tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''}>
            {texto ? (
                <TextoComBorda pointer='true' variant='text' color='primary'>
                    {texto}
                </TextoComBorda>
            ) : (
                <>
                    <Link href='/inicio'>
                        <TextoComBorda pointer='true' variant='text' color='primary'>
                            Inicio
                        </TextoComBorda>
                    </Link>
                    {pagina === 'habilidades' && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link href='habilidades'>
                                <TextoComBorda pointer='true' variant='text' color='primary'>
                                    Habilidades
                                </TextoComBorda>
                            </Link>
                        </>
                    )}
                    {pagina === 'pinturas' && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link href='/pinturas'>
                                <TextoComBorda pointer='true' variant='text' color='primary'>
                                    Pinturas
                                </TextoComBorda>
                            </Link>
                        </>
                    )}
                    {(pagina === 'trabalhos' || pagina === 'programacao' || pagina === 'design') && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link href='/trabalhos'>
                                <TextoComBorda pointer='true' variant='text' color='primary'>
                                    Trabalhos
                                </TextoComBorda>
                            </Link>
                        </>
                    )}
                    {pagina === 'programacao' && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link href='/programacao'>
                                <TextoComBorda pointer='true' variant='text' color='primary'>
                                    Programação
                                </TextoComBorda>
                            </Link>
                        </>
                    )}
                    {pagina === 'design' && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link href='/design'>
                                <TextoComBorda pointer='true' variant='text' color='primary'>
                                    Design
                                </TextoComBorda>
                            </Link>
                        </>
                    )}
                </>
            )}
        </BoxHeader>
    );
};

export default Header;
