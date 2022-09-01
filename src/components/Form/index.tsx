import React from 'react';
import InputText from '../InputText';
import InputTime from '../InputTime';
import Button from '../Button';

export default function Form() {
  return (
    <form>
        <InputText label="Tarefa" />
        <InputTime label="Time" />
        <Button />
    </form>
  )
};
