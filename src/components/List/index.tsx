import React, {useState, useEffect} from 'react'
import Item from './Item';
import styled from 'styled-components';
import ITask from '../../types/task';

const StyledList = styled.aside<{tasks : any}>`
    display: inline-block;
    width: 340px;
    color: white;
    border-left: 1px dashed #8e8686;
    clear: both;
    height: 350px;
    overflow-y: ${(props)=> props.tasks.length>4?'scroll':'none'};

    ::-webkit-scrollbar {
        width: 7px;
        background-color: #e3e0d6;
    }
    
    ::-webkit-scrollbar-track {
        background-color: #1C1919;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #635B5B;
        border-radius:20px;
    }

    h3{
        text-align: center;
    }

    ul{
        list-style-type: none;
        padding-left: 20px;
        padding-right: 20px;
    }

    ul h3{
        text-align: initial;
        padding-top: 10px;
    }


    @media (max-width: 710px){
        margin-right: 0px;
        margin-left: 5px;
        width: 100%;
        border-left: none;
        border-top: 1px dashed #8e8686;
    }

   
`;

interface Props {
    onClick: Function
    selected: ITask | undefined
    tasks: ITask[]
}

export default function List({onClick, selected, tasks} : Props) {

    const [task, setTask] = useState<string>('');
    const [time, setTime] = useState<string>('');

    useEffect(() =>{
        if(selected){
            setTime(selected.time)
            setTask(selected.task)
        }
    },[selected])

    const handleClick = (task:string, time:string) => {
        onClick(task, time)
    }
  
    return (
        <StyledList tasks={tasks}>
            <h3>Estudos do Dia</h3>

                <ul>
                    {tasks.map((task:ITask) => <Item key={task.id} task={task} onClick={handleClick}/> )}
                </ul> 

        </StyledList>
    )
}
