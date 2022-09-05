import React from 'react'
import styled from 'styled-components';
import ITask from '../../../types/task';
import checked from '../../../assets/img/checked.png';

const StyledItem = styled.li`
  background-color: #635b5b;
  box-shadow:none;
  border-radius: 5px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: white;
  line-height: 10px;

  &.selected{
    background-color: #8e8686;
    box-shadow:0 0 .4em #fff;
  }

  &.completed{
    background-color: green !important;
    box-shadow:0 0 .4em green;
  }

  &.completed:hover{
    background-color: #8e8686;
    cursor: default;
  }

:hover{
  background-color: #8e8686;
  cursor: pointer;
}
`;

const CompletedItem = styled.span`{
  &.completed-task{
    display: block;
    float: right;
    margin-top: -27px;
    background-image: url(${checked});
    background-repeat: no-repeat;
    background-size: 38px 38px;
    padding-right: 8px;
    width: 42px;
    height: 45px;
  }
}`;

export default function Item({task, onClick}: {task:ITask, onClick:Function}) {

  const handleClick = () => {
    if(!task.completed){
      onClick(task);
    }
  }

  return (
    <StyledItem key={task.id}
    className={`${task.id === task.id && task.selected?'selected':''} ${task.id === task.id && task.completed?'completed':''}`}
        onClick={handleClick}>
        <h3>{task.task} </h3>  
        <span>{task.time}</span>  
        
        {task.completed && <CompletedItem className='completed-task' aria-label='task-completed'></CompletedItem>}
    </StyledItem>
  )
};
