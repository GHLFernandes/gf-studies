import React from 'react'

export default function InputText(props: { label: string }) {
  return (
   <>
    <label htmlFor='task'>{props.label}</label>
    <input type='text' id='task' name='task' placeholder='O que você quer estudar?' required />
   </>
  )
}
