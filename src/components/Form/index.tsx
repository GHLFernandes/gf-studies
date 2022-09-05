import React, { useState } from 'react';
import InputText from '../InputText';
import InputTime from '../InputTime';
import Button from '../Button';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledForm = styled.form`
    display: inline-block;
    float:left;
    flex-wrap: wrap;
    width: 300px;
    margin-right: 20px;
    margin-left: 20px;

    @media (max-width: 710px){
        width: 100%;
        margin-right: 20px;
        margin-left: 20px;
    }
`;

export default function Form({onSubmit}: {onSubmit: Function}) {

    const [task, setTask] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        onSubmit({id: uuidv4(), task, time, selected:false, completed:false});
        setTask('');
        setTime('');
    }

  return (
    <StyledForm onSubmit={handleSubmit}>
        <InputText 
            label="Tarefa" 
            onChange={(value:string) => setTask(value)}
            value={task}
        />
        <InputTime 
            label="Tempo de Estudo" 
            onChange={(value:string) => setTime(value)}
            value={time}/>
        <Button>Adicionar</Button>
    </StyledForm>
  )
};
