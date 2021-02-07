import React,{Component} from 'react'
import styled from 'styled-components'

const MainBlock=styled.div`
display:flex;
flex-direction:row;
background-color:pink;
width:100%;
align-self:center;
height:2em;
`
const Parts=styled.div`
padding-left:8%;
align-self:center;
`

class Nav extends React.Component{
    render()
    {
        return(
            <MainBlock>
                    <Parts>Home</Parts>
                    <Parts>Shop</Parts>
                    <Parts>Pages</Parts>
                    <Parts>Mega Menu</Parts>
                    <Parts>Buy</Parts>
            </MainBlock>
        )
    }
}

export default Nav;