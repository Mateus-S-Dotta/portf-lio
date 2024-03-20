import { BoxTexts, BorderText } from '../styles';
import texts from '../texts';

function MainText({ page, showContent }) {
    return (
        <BoxTexts sx={{ display: !showContent && 'none' }}>
            <BorderText variant='title' color='primary'>
                {texts[page].line1}
            </BorderText>
            <BorderText variant='title' color='primary'>
                {texts[page].line2}
            </BorderText>
        </BoxTexts>
    );
};

export default MainText;
