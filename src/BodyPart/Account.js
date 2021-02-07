import React, { Component } from 'react'
import styled from 'styled-components'


const MainBlock=styled.form`
height:40%;
display:flex;
flex-direction:column;
width:20%;
margin-top:1%;
margin-left:10%;
`
const FirstPart=styled.div`
width:3%
background-color:rgb(211,211,211);
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
                <Heading>Create Account</Heading>
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

