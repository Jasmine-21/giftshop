import React, { Component } from 'react'
import styled from 'styled-components'
import Login from './Login'
import Account from './Account'

const MainBlock=styled.div`
height: calc(100% - 6em)
width:100%;
display:flex;
box-sizing: border-box;
justify-content:space-around;
flex-direction:row;
`
class Body extends React.Component{
    render()
    {
        return(
            <MainBlock>
                
                <Login/>
                <Account/>
            </MainBlock>
        )
    }
}

export default Body;