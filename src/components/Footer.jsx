import { Email, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"

const Container=styled.div`
display:flex;
${mobile({flexDirection:"column"})}
`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo=styled.h1`
`
const Desc=styled.p`
margin:20px 0px;
`
const SocialConatiner=styled.div`
display:flex;

`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`
const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`
const Title=styled.h3`
margin-bottom:30px;
`
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem=styled.li`
width:50%;
margin-bottom:10px;
`

const Right=styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#fff8f8"})}
`

const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PAINTS.</Logo>
        <Desc>lorem epsume dficd indn ncods  </Desc>
        <SocialConatiner>
            <SocialIcon color='385999'>
                <Twitter/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
            <Email/>
            </SocialIcon>
        </SocialConatiner>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Paints</ListItem>
            <ListItem>Thinner</ListItem>
            <ListItem>Raw Material</ListItem>
            <ListItem>xyz</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/> ghaziabad</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>283897237</ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@gmail.com</ContactItem>
      </Right>
    </Container>
  )
}

export default Footer

