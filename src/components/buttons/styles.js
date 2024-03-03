import { BoxButtons, BoxTexts, IconText } from "../styles";
import { Link, styled } from '@mui/material';
import iconLink from '../../svg/link.svg';
import { sizeHeight, sizeWidth } from '../../theme/theme';

const BoxWork = styled(BoxButtons)`
    padding-top: ${({ sizeheight, sizewidth }) => ((sizewidth === 'true' || sizeheight === 'true') ? '1.6rem' : '3.2rem')};
    flex-direction: ${({ sizeheight, sizewidth }) => ((sizewidth === 'true' & !(sizeheight === 'true')) ? 'column' : !(sizewidth === 'true') & (sizeheight === 'true') ? 'row' : (sizewidth === 'true') & (sizeheight === 'true') ? 'column' : 'row')};
    gap: ${({ sizeheight, sizewidth }) => ((sizewidth === 'true') || (sizeheight === 'true') ? '1.6rem' : '3.2rem')};
`;

function BoxButton({ text, direction }) {
    return (
        <Link href={`/${direction}`} width='100%'>
            <BoxTexts pointer='true'>
                <IconText
                    variant='title'
                    color='primary'
                    pointer='true'
                >
                    <img style={{ width: sizeHeight || sizeWidth ? '1.6rem' : '3.2rem' }} alt='icone entrar no link' src={iconLink} />
                    {text}
                </IconText>
            </BoxTexts>
        </Link>
    )
};

export {
    BoxWork,
    BoxButton
}