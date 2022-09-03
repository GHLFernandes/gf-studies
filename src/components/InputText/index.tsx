import React from 'react';
import styled from 'styled-components';

const StyledInputText = styled.div`
    margin: 24px 0;

    label {
        color: white;
        display: block;
        margin-bottom: 8px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
    }
    
     input {
        background-color: #fff;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, .06);
        width: 100%;
        border: none;
        font-size: 16px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 5px;
    }
`;

export default function InputText({label, onChange, value}: { label: string , onChange: Function, value: string}) {

    const handleChange = (e:any) =>{
        onChange(e.target.value);
    }

  return (
   <StyledInputText>
        <label htmlFor='task'>{label}</label>
        <input 
            type='text' 
            id='task' 
            name='task' 
            onChange={handleChange}
            value={value}
            placeholder='O que você quer estudar?' 
            required />
   </StyledInputText>
  )
}
