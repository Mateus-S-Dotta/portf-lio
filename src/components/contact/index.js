import { Link } from '@mui/material';
import git from '../../svg/git.svg';
import linkedin from '../../svg/linkedin.svg';
import { sizeHeight, sizeWidth } from '../../theme/theme';
import { BoxFooter, BorderText } from '../styles';
import { BoxIcons } from './styles';

function Contact({ showContent }) {
    return (
        <BoxFooter sx={{ display: !showContent && 'none' }} sizeheight={sizeHeight ? 'true' : ''} sizewidth={sizeWidth ? 'true' : ''}>
            <BorderText variant='title' color='primary'>
                Contatos
            </BorderText>
            <Link onClick={() => window.open('https://api.whatsapp.com/send?phone=5551992235225&text=Ol%C3%A1,%20entrei%20pelo%20seu%20portf%C3%B3lio.', '_blank')}>
                <BorderText pointer='true' variant='text' color='primary'>
                    51 992235225
                </BorderText>
            </Link>
            <Link onClick={() => window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Ol%C3%A1%2C+entrei+pelo+seu+portf%C3%B3lio&to=mateusalaibbdotta@gmail.com', '_blank')}>
                <BorderText pointer='true' variant='text' color='primary'>
                    mateusalaibbdotta@gmail.com
                </BorderText>
            </Link>
            <BoxIcons>
                <img
                    onClick={() => window.open('https://www.linkedin.com/in/mateus-s-dotta', '_blank')}
                    src={linkedin}
                    alt='icone linkedin'
                    style={{
                        color: 'white',
                    }}
                    className='hover'
                />
                <img
                    onClick={() => window.open('https://github.com/Mateus-S-Dotta', '_blank')}
                    src={git}
                    alt='icone github'
                    style={{
                        color: 'white',
                    }}
                    className='hover'
                />
            </BoxIcons>
        </BoxFooter>
    );
};

export default Contact;
