import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.label`
  display: inline-flex;
  background: var(--white);
  align-items: center;
  padding: 0 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,0.4);
  flex: 1;

i{
    margin-right: 1em;
    color: #c4c4c4;
}

input{
    //width: 100%;
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .9em;
    outline: 0;
    color: var(--black);
    background: var(--white);
    &::-webkit-input-placeholder{
        color: #C4C4C4;
    }

}


`

function Input({... props}){
    return (
        <InputStyled>
         <i class="fas fa-search"></i>
         <input type="text" {... props} />
        </InputStyled>
    )
}

export default Input