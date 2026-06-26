import React from 'react'
import styles from './Button.module.css'
import styled from 'styled-components';


const Button = ({name}) => {
  console.log(styles);
  return (
    <StyleButton>button</StyleButton>
  )
}
const StyleButton =styled.button`
    border:1px solid;
    background-color:tomato;
    padding:1rem 2rem;
`

export default Button
