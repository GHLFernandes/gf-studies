import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { timeToSeconds } from '../../common/utils/time';
import ITask from '../../types/task';
interface Props {
  time: number | undefined,
  go: boolean
}

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

    &.start{
      color: #00c000;
    }

    &.ending{
      background-color: #872b2b !important;
    }

`;

const StyledDigit = styled.span`
    font-size: 3em;
`;

const StyledDots = styled.span`
    font-size: 2.5em;
`;


export default function Clock({time = 0, go}:Props) {

  const hh = Math.floor(time / 3600);
  const mm = Math.floor((time - (hh * 3600)) / 60);
  const ss = time % 60;

  const [firstPartHh, secondPartHh] = String(hh).padStart(2, '0');
  const [firstPartMin, secondPartMin] = String(mm).padStart(2, '0');
  const [firstPartSec, secondPartSec] = String(ss).padStart(2, '0');

  const last5Secs = (go && time < 10)?true:false;
  const [last9Secs, setLast9Secs] = useState(false);

  useEffect(() => {
    setTimeout( () => {
      if(go && time < 10){
        setLast9Secs(!last9Secs);
      }
    }, 100)
    setLast9Secs(false);
  }, [go, time])


  return (
    <StyledClock className={`${go?'start':''}  ${last9Secs?'ending':''}`}>
        <StyledDigit>{firstPartHh}</StyledDigit>
        <StyledDigit>{secondPartHh}</StyledDigit>
        <StyledDots>:</StyledDots>
        <StyledDigit>{firstPartMin}</StyledDigit>
        <StyledDigit>{secondPartMin}</StyledDigit>
        <StyledDots>:</StyledDots>
        <StyledDigit>{firstPartSec}</StyledDigit>
        <StyledDigit>{secondPartSec}</StyledDigit>
    </StyledClock>
  )
}
