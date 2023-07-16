import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"

const Container =styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1604649418977-675d4b6320e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" ) center;
background-size: cover;
display:flex;
align-items: center;
justify-content: center;
`
const Wrapper =styled.div`
padding:20px;
width:25%;
background-color:white;
${mobile({width:"75%"})}

`
const Form =styled.form`
display:flex;
flex-direction: column;
`
const Title =styled.h1`
font-size:24px;
font-weight:300;
`
const Input =styled.input`
flex:1;
min-width:40%;
margin:10px 0px ;
padding:10px;
`
const Button =styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
`
const Link=styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>Sign In</Title>
      <Form>
          <Input placeholder="username"/>
          <Input placeholder="password"/>
          <Button>Login</Button>
          <Link>Do not remember the password?</Link>
          <Link>Create a new account</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login
