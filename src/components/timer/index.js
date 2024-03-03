import { BoxAinimation } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { theme } from '../../theme/theme'

function Timer({ children, turn, absolute, page, zIndex }) {
    const [show, setShow] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setShow('true');
        }, ((theme.initionTime + (turn * theme.animationTime)) / page))
    }, [turn, page]);

    return (
        <BoxAinimation zIndex={zIndex} show={show} absolute={absolute}>
            {children}
        </BoxAinimation>
    );
};

export default Timer;