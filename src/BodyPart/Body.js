import React, { Component } from 'react'
import styled from 'styled-components'
import Login from './Login'
import Account from './Account'

const MainBlock=styled.div`
height: calc(100% - 6em);
width:100%;
justify-content:space-around;
display:flex;
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