import { Link } from "@mui/material";
import { IconText } from "../styles";
import iconLink from '../../svg/link.svg';
import { sizeHeight, sizeWidth } from '../../theme/theme';

function InitionButton({ text, link }) {
    return (
        <Link href={`/${link}`}>
            <IconText
                pointer='true'
                variant='title'
                color='primary'
            >
                <img style={{ width: sizeHeight || sizeWidth ? '1.6rem' : '3.2rem', marginRight: '0.8rem' }} alt='icone entrar no link' src={iconLink} />
                {text}
            </IconText>
        </Link>
    )
};

export default InitionButton;