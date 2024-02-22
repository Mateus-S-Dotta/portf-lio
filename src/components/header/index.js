import { useNavigate } from 'react-router-dom';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { TextoComBorda } from '../styles';
import { BoxHeader } from './styles';
import { Link } from '@mui/material';

function Header({ texto, pagina }) {
    const navigate = useNavigate();
    return (
        <BoxHeader tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''}>
            {texto ? (
                <TextoComBorda pointer='true' variant='text' color='primary'>
                    {texto}
                </TextoComBorda>
            ) : (
                <>
                    <Link onClick={() => navigate('/inicio')}>
                        <TextoComBorda pointer='true' variant='text' color='primary'>
                            Inicio
                        </TextoComBorda>
                    </Link>
                    {pagina === 'habilidades' && (
                        <>
                            <TextoComBorda variant='text' color='primary'>
                                /
                            </TextoComBorda>
                            <Link onClick={() => navigate('/habilidades')}>
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
                            <Link onClick={() => navigate('/pinturas')}>
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
                            <Link onClick={() => navigate('/trabalhos')}>
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
                            <Link onClick={() => navigate('/programacao')}>
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
                            <Link to='/design'>
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
