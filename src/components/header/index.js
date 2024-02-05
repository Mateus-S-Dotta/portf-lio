import { Link } from 'react-router-dom';
import { TextoComBorda } from '../styles';
import { BoxHeader } from './styles';

function Header({ texto, pagina }) {
    return (
        <BoxHeader>
            {texto ? (
                <TextoComBorda variant='text' color='primary'>
                    {texto}
                </TextoComBorda>
            ) : (
                <>
                    <Link to='/inicio'>
                        <TextoComBorda variant='text' color='primary'>
                            Inicio
                        </TextoComBorda>
                    </Link>
                    {(pagina === 'sobremim' || pagina === 'curiosidades' || pagina === 'habilidades' || pagina === 'pinturas') && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link to='/sobremim'>
                                <TextoComBorda variant='text' color='primary'>
                                    Sobre Mim
                                </TextoComBorda>
                            </Link>
                        </>
                    )}
                    {pagina === 'habilidades' && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link to='/habilidades'>
                                <TextoComBorda variant='text' color='primary'>
                                    Habilidades
                                </TextoComBorda>
                            </Link>
                        </>
                    )}
                    {(pagina === 'curiosidades' || pagina === 'pinturas') && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link to='/curiosidades'>
                                <TextoComBorda variant='text' color='primary'>
                                    Curiosidades
                                </TextoComBorda>
                            </Link>
                        </>
                    )}
                    {pagina === 'pinturas' && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link to='/pinturas'>
                                <TextoComBorda variant='text' color='primary'>
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
                            <Link to='/trabalhos'>
                                <TextoComBorda variant='text' color='primary'>
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
                            <Link to='/programacao'>
                                <TextoComBorda variant='text' color='primary'>
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
                            <Link to='/design'>
                                <TextoComBorda variant='text' color='primary'>
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
