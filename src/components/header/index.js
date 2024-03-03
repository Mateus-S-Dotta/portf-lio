import { Link } from '@mui/material';
import { sizeHeight, sizeWidth } from '../../theme/theme';
import { BorderText } from '../styles';
import { BoxHeader } from './styles';

function Header({ text, page }) {
    return (
        <BoxHeader sizeheight={sizeHeight ? 'true' : ''} sizewidth={sizeWidth ? 'true' : ''}>
            {text ? (
                <BorderText pointer='true' variant='text' color='primary'>
                    {text}
                </BorderText>
            ) : (
                <>
                    <Link href='/inicio'>
                        <BorderText pointer='true' variant='text' color='primary'>
                            Inicio
                        </BorderText>
                    </Link>
                    {page === 'habilidades' && (
                        <>
                            <BorderText variant='text' color='primary'>
                                /
                            </BorderText>
                            <Link href='habilidades'>
                                <BorderText pointer='true' variant='text' color='primary'>
                                    Habilidades
                                </BorderText>
                            </Link>
                        </>
                    )}
                    {page === 'pinturas' && (
                        <>
                            <BorderText variant='text' color='primary'>
                                /
                            </BorderText>
                            <Link href='/pinturas'>
                                <BorderText pointer='true' variant='text' color='primary'>
                                    Pinturas
                                </BorderText>
                            </Link>
                        </>
                    )}
                    {(page === 'trabalhos' || page === 'programacao' || page === 'design') && (
                        <>
                            <BorderText variant='text' color='primary'>
                                /
                            </BorderText>
                            <Link href='/trabalhos'>
                                <BorderText pointer='true' variant='text' color='primary'>
                                    Trabalhos
                                </BorderText>
                            </Link>
                        </>
                    )}
                    {page === 'programacao' && (
                        <>
                            <BorderText variant='text' color='primary'>
                                /
                            </BorderText>
                            <Link href='/programacao'>
                                <BorderText pointer='true' variant='text' color='primary'>
                                    Programação
                                </BorderText>
                            </Link>
                        </>
                    )}
                    {page === 'design' && (
                        <>
                            <BorderText variant='text' color='primary'>
                                /
                            </BorderText>
                            <Link href='/design'>
                                <BorderText pointer='true' variant='text' color='primary'>
                                    Design
                                </BorderText>
                            </Link>
                        </>
                    )}
                </>
            )}
        </BoxHeader>
    );
};

export default Header;
