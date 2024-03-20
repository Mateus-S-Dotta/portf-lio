import { Link } from '@mui/material';
import { sizeHeight, sizeWidth, sizeWidthFonte, sizeHeightFonte } from '../../theme/theme';
import { BorderText } from '../styles';
import { BoxHeader, LinkStyled } from './styles';
import arrowBack from '../../svg/arrowBack.svg';

function Header({ text, page }) {
    const imgStyle = {
        width: sizeWidthFonte || sizeHeightFonte ? '1.2rem' : '1.6rem'
    }

    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <BoxHeader sizeheight={sizeHeight ? 'true' : ''} sizewidth={sizeWidth ? 'true' : ''}>
            {text ? (
                <Link onClick={handleClick}>
                    <BorderText pointer='true' variant='text' color='primary'>
                        {text}
                    </BorderText>
                </Link>
            ) : (<>{page === 'inicio' ? (
                <BorderText variant='text' color='primary'>
                    Inicio
                </BorderText>
            ) : (
                <LinkStyled href='/inicio'>
                    <img style={imgStyle} src={arrowBack} alt='voltar ao inicio' />
                    <BorderText pointer='true' variant='text' color='primary'>
                        Voltar ao Inicio
                    </BorderText>
                </LinkStyled>
            )}
                <Link href='https://docs.google.com/document/d/1aJ2GZ5oFDnjbzGBD4_NbgBFD98Wp69CV/edit?usp=sharing&ouid=109215236273544494631&rtpof=true&sd=true'>
                    <BorderText pointer='true' variant='text' color='primary'>
                        Download CV
                    </BorderText>
                </Link>
            </>)}
        </BoxHeader>
    );
};

export default Header;
