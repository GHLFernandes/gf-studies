import React from 'react'

export default function InputTime(props : {label: string}) {
  return (
    <>
    <label htmlFor='time'>{props.label}</label>
    <input type='time' step='1' id='time' name='time' min='00:00:00' max='02:00:00'  required />
   </>
  )
}
