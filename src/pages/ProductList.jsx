import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Footer from "../components/Footer"
const Container=styled.div`
`

const Title=styled.div`
margin:20px`

const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`
const Filter=styled.div`
margin:20px;`

const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right: 20px;
`
const Select=styled.select`
padding:10px;
margin:10px;
`
const Option=styled.option``


const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Title>Paints</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select>
        <Option disabled selected>
        Product
        </Option>
        <Option>Paints</Option>
        <Option>Thinner</Option>
        <Option>Raw material</Option>
        </Select>
        <Select>
        <Option disabled selected>
        Packaging
        </Option>
        <Option>1L</Option>
        <Option>4L</Option>
        <Option>16L</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select>
        <Option disabled selected>
        color
        </Option>
        <Option>White</Option>
        <Option>Black</Option>
        <Option>Red</Option>
        <Option>Blue</Option>
        <Option>Yellow</Option>
        <Option>Gray</Option>
        <Option>Green</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Footer/>
    </Container>
  )
}
export default ProductList