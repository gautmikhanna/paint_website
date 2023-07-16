import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import { Add, Remove } from '@material-ui/icons'
import {mobile} from "../Responsive"

const Container=styled.div``
const Wrapper=styled.div`
padding:50px;
display: flex;
${mobile({padding:"10px", flexDirection:"column"})}
`
const ImgContainer=styled.div`
flex:1;

`
const Image=styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:"40vh"})}
`
const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})}
`
const Title=styled.h1`
font-weight:200;
`
const Desc=styled.p`
margin:20px 0px;
`
const Price=styled.span`
font-weight:100;
font-size:40px;
`
const FilterContainer=styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({widht:"100%"})}
`
const Filter=styled.div`
display:flex;
align-items:center;
`
const FilterTitle=styled.span`
font-size:20px;
font-weight:200;
`
const FilterSize=styled.select`
margin-left:10px;
padding:5px;
`
const FilterSizeOption=styled.option``
// const AddContainer=styled.div``
// const AmountConatiner=styled.div``
// const Amount=styled.span``

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1528804431125-842f17de657b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"/>
        </ImgContainer>
        <InfoContainer>
        <Title>Blue Paint</Title>
        <Desc>Lorem ipsum dolar sit amet,hfdiuh idshc ius incdn</Desc>
        <Price>500 Rs.</Price>
        <FilterContainer>
            <Filter>
                <FilterTitle>Packaging</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>1L</FilterSizeOption>
                    <FilterSizeOption>4L</FilterSizeOption>
                    <FilterSizeOption>16L</FilterSizeOption>
                </FilterSize>
            </Filter>
        </FilterContainer>
        {/* <AddContainer>
            <AmountConatiner>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountConatiner>
            <Button>ADD TO </Button>
        </AddContainer> */}
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
    
  )
}

export default Product
