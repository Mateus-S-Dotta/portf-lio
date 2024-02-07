import { Link } from '@mui/material';
import doubleArrow from '../../svg/doubleArrow.svg';
import { tamanhoHeight, tamanhoWidth } from '../../theme/theme';
import { BoxFooter, TextoComBorda } from '../styles';

function RoleParaBaixo() {
    return (
        <BoxFooter tamanhoheight={tamanhoHeight ? 'true' : ''} tamanhowidth={tamanhoWidth ? 'true' : ''}>
            <Link>
                <TextoComBorda variant='title' color='primary' pointer='true'>
                    Role Para Baixo
                </TextoComBorda>
            </Link>
            <img src={doubleArrow} alt='double arrow' className='hover' />
        </BoxFooter>
    );
};

export default RoleParaBaixo;
