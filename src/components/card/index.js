import { sizeHeight, sizeWidth } from '../../theme/theme';
import { BorderText } from '../styles';
import { BoxCard, StyledLink } from './styles';
import { BoxContent } from '../styles';

function Card({ title, photo, text, link, variant }) {
    return (
        <BoxCard border={link ? 'true' : ''}>
            <StyledLink sizeheight={sizeHeight ? 'true' : ''} sizewidth={sizeWidth ? 'true' : ''} href={link ? link : '#'} link={link ? link : ''}>
                <BorderText variant='title' color='primary'>
                    {title}
                </BorderText>
                <BoxContent sizeheight={sizeHeight ? 'true' : ''} sizewidth={sizeWidth ? 'true' : ''}>
                    {variant === 'title' && (
                        <img style={{ maxWidth: '26.8rem', maxHeight: '16.4rem', width: '50vw' }} src={photo} alt='foto do card' />
                    )}
                    <BorderText width='100%' variant={variant} color='primary'>
                        {text}
                    </BorderText>
                </BoxContent>
            </StyledLink>
        </BoxCard>
    );
};

export default Card;
