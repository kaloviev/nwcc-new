import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const CircularProgress = ({percentage, text}) => {
    return(
        <CircularProgressbar value={percentage} text={text} />
    )
}

export default CircularProgress;