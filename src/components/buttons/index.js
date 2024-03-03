import { sizeHeight, sizeWidth } from '../../theme/theme';
import texts from '../texts';
import { BoxWork, BoxButton } from './styles';

function Buttons({ page }) {
    return (
        <BoxWork
            sizeheight={sizeHeight ? 'true' : ''}
            sizewidth={sizeWidth ? 'true' : ''}
        >
            <BoxButton text={texts[page].option1} direction='programacao' />
            <BoxButton text={texts[page].option2} direction='design' />
        </BoxWork>
    );
};

export default Buttons;
