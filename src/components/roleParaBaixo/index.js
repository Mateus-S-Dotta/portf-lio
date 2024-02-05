import doubleArrow from '../../svg/doubleArrow.svg';
import { BoxFooter, TextoComBorda } from '../styles';

function RoleParaBaixo() {
    return (
        <BoxFooter>
            <TextoComBorda variant='title' color='primary'>
                Role Para Baixo
            </TextoComBorda>
            <img src={doubleArrow} alt='double arrow' style={{ width: '3.2rem', height: '3.2rem', color: 'white' }} />
        </BoxFooter>
    );
};

export default RoleParaBaixo;
