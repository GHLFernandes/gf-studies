import React, { useEffect, useState } from 'react'
import Clock from '../Clock'
import styled from 'styled-components';
import Button from '../Button';
import ITask from '../../types/task';
import { timeToSeconds } from '../../common/utils/time';

const StyledTimer = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    color: white;
    border-top: 1px dashed #8e8686;
    margin: 0 auto;

    @media (max-width: 710px){
        width: 325px;
        margin: 0;
    }
`;

const Title = styled.div`
    p {
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
    }

    h3{
        color: white;
    }
`;

const StyledClock = styled.div`
    display: flex;
    flex: wrap;
   margin: 0 auto;
   margin-bottom: 20px;
   
`;

interface Props {
    selected: ITask | undefined
}

export default function Timer({selected} : Props) {

    const [time, setTime] = useState<number>(0);
    const [task, setTask] = useState<string>('');

    useEffect(() =>{
        if(selected){
            setTime(timeToSeconds(selected.time))
            setTask(selected.task)
        }
    },[selected])

    const countdown = (counter:number = 0) => {
        setTimeout( () => {
            if(counter > 0){
                setTime(counter - 1)
                return countdown(counter - 1);
            }
        }, 1000);

    }

  return (
    <StyledTimer>
        <Title>
            <p>Escolha um card e inicie o crônometro</p>
            <h3>{task}</h3>
        </Title>
        <StyledClock>
            <Clock time={time}/>    
        </StyledClock>
        <Button onClick={() => countdown(time)}>Começar</Button>
    </StyledTimer>
  )
}
