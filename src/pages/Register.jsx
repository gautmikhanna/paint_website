import React from 'react'
import { styled } from 'styled-components'
import {mobile} from "../Responsive"

const Container =styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" ) center;
background-size: cover;
display:flex;
align-items: center;
justify-content: center;
`
const Wrapper =styled.div`
padding:20px;
width:40%;
background-color:white;
${mobile({width:"75%"})}
`
const Form =styled.form`
display:flex;
flex-wrap:wrap;
`
const Title =styled.h1`
font-size:24px;
font-weight:300;
`
const Input =styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`
const Agreement =styled.span`
font-size:12px;
margin:20px 0px;
`
const Button =styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Agreement>
                By creating an account, I consent to the processing of my personal data in accordane with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
