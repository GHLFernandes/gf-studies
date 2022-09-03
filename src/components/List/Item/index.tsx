import React from 'react'
import styled from 'styled-components';

const StyledItem = styled.li<{selected : any}>`
  background-color: ${(props)=> props.selected?'#8e8686':'#635b5b'};
  box-shadow: ${(props)=> props.selected?'0 0 .4em #fff':'none'};
  border-radius: 5px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: white;
  line-height: 10px;


:hover{
  background-color: #8e8686;
  cursor: pointer;
}
`;



export default function Item({task, onClick, selected}: {task:any, onClick:Function, selected:any}) {

  const handleClick = () => {
    onClick(task);
  }

  return (
    <StyledItem key={task.id}
        selected={selected && selected.id == task.id?true:false}
        onClick={handleClick}>
        <h3>{task.task} </h3>  
        <span>{task.time}</span>  
    </StyledItem>
  )
};
