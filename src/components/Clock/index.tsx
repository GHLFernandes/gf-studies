import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { timeToSeconds } from '../../common/utils/time';
import ITask from '../../types/task';

const StyledClock = styled.div`
    display: flex;
    color: white;
    margin: 0 auto;
    font-family: 'Orbitron', sans-serif;
    background-color: #1c1919;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 80px;
    box-shadow: inset 0 0 2em #000;
`;

const StyledDigit = styled.span`
    font-size: 3em;
`;

const StyledDots = styled.span`
    font-size: 2.5em;
`;

interface Props {
  time: number | undefined
}

export default function Clock({time = 0}:Props) {

  const mm = Math.floor(time / 60);
  const ss = time % 60;
  const [firstPartMin, secondPartMin] = String(mm).padStart(2, '0');
  const [firstPartSec, secondPartSec] = String(ss).padStart(2, '0');

  return (
    <StyledClock>
        <StyledDigit>{firstPartMin}</StyledDigit>
        <StyledDigit>{secondPartMin}</StyledDigit>
        <StyledDots>:</StyledDots>
        <StyledDigit>{firstPartSec}</StyledDigit>
        <StyledDigit>{secondPartSec}</StyledDigit>
    </StyledClock>
  )
}
