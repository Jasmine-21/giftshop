import React, { Component } from 'react'
import styled from 'styled-components'


const MainBlock=styled.form`
width:45%;

height:40%;
display:flex;
flex-direction:column;
width:20%;
margin-top:1%;
box-sizing: border-box;
`
const FirstPart=styled.div`
width:3%
background-color:light grey;
`
const SecondPart=styled.div``
const Email=styled.p`
float:left;
display:flex;
`
const Pswd=styled.p`
margin-top:2%;
float:left;
display:flex;
`
const Heading=styled.p`
text-align:center;
background-color:grey;
align-self:center;
`
const Input=styled.input`
width:100%;
`
class Login extends React.Component{
    render()
    {
        return(
            <MainBlock>
                <FirstPart>
                <Heading>Login</Heading>
                </FirstPart>
                <SecondPart>
                    <Email>Email</Email>
                    <Input/>
                    <Pswd>Pasword</Pswd>
                    <Input/>
                </SecondPart>
            </MainBlock>
        )
    }
}

export default Login;

