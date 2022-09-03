import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display: block;
    margin: 0 auto;
    width: 50%;
    background: #3149d1;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    color: #FFFFFF;
    margin-bottom: 20px;

    :hover {
        background: #495dd1;
        cursor: pointer;
    }
`;

export default function Button({children, onClick}:{children:string, onClick?: () => void}) {
  return (

    <Btn onClick={onClick}>{children}</Btn>
  )
}
