import git from '../../svg/git.svg';
import linkedin from '../../svg/linkedin.svg';
import { BoxFooter, TextoComBorda } from '../styles';
import { BoxIcones } from './styles';

function Contatos() {
    return (
        <BoxFooter>
            <TextoComBorda variant='title' color='primary'>
                Contatos
            </TextoComBorda>
            <a
                style={{ textDecoration: 'none' }}
                href='https://api.whatsapp.com/send?phone=5551992235225&text=Ol%C3%A1,%20entrei%20pelo%20seu%20portf%C3%B3lio.'
            >
                <TextoComBorda
                    sx={{
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}
                    variant='text'
                    color='primary'
                >
                    51 992235225
                </TextoComBorda>
            </a>
            <a
                style={{ textDecoration: 'none' }}
                href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Ol%C3%A1%2C+entrei+pelo+seu+portf%C3%B3lio&to=mateusalaibbdotta@gmail.com'
            >
                <TextoComBorda
                    sx={{
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}
                    variant='text'
                    color='primary'
                >
                    mateusalaibbdotta@gmail.com
                </TextoComBorda>
            </a>
            <BoxIcones>
                <a
                    style={{ textDecoration: 'none' }}
                    href='https://www.linkedin.com/in/mateus-s-dotta'
                >
                    <img
                        src={linkedin}
                        alt='icone linkedin'
                        style={{
                            width: '3.2rem',
                            height: '3.2rem',
                            color: 'white',
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}
                    />
                </a>
                <a
                    style={{ textDecoration: 'none' }}
                    href='https://github.com/Mateus-S-Dotta'
                >
                    <img
                        src={git}
                        alt='icone github'
                        style={{
                            width: '3.2rem',
                            height: '3.2rem',
                            color: 'white',
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }} />
                </a>
            </BoxIcones>
        </BoxFooter>
    );
};

export default Contatos;