import React from 'react';
import styled from 'styled-components';

const StyledInputTime = styled.div`
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


export default function InputTime({label, onChange, value}: { label: string , onChange: Function, value: string}) {

  const handleChange = (e:any) =>{
    onChange(e.target.value);
  }
  
  return (
    <StyledInputTime>
        <label htmlFor='time'>{label}</label>
        <input 
          type='time' 
          step='1' 
          id='time' 
          name='time' 
          onChange={handleChange}
          value={value}
          min='00:00:00' 
          max='08:59:59'  
          required 
        />
   </StyledInputTime>
  )
}
