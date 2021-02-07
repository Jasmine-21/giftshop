import React, { Component } from 'react'
import styled from 'styled-components'


const MainBlock=styled.form`
width:50%;
height:80%;
display:flex;
flex-direction:column;
width:20%;
margin-top:1%;
box-sizing: border-box;
border:1px solid grey;
`
const FirstPart=styled.div`
width:100%;
background-color:light grey;
box-sizing:border-box;
align-self: center;
`
const SecondPart=styled.div`
display:flex;
flex-direction:column;
`
const Email=styled.p`
float:left;
display:flex;
margin-left:0.8em;
`
const Pswd=styled.p`
margin-top:3%;
float:left;
margin-left:0.8em;
display:flex;
`
const Heading=styled.p`
text-align:center;
background-color:grey;
align-self:center;

`
const Input=styled.input`
width:90%;
align-self:center;

`

const ThirdPart=styled.button`
display:flex;
width:50%;
align-self:center;
margin-top:2em;
background-color:pink;
color:white;
border:1px solid white;
justify-content:center;
`
const FourthPart=styled.p`
align-self:center;
margin-top:3%;
font-size:0.55em;
`
class Login extends React.Component{
    render()
    {
        return(
            <MainBlock>
                <FirstPart>
                <Heading>Create  Account</Heading>
                </FirstPart>
                <SecondPart>
                    <Email>First Name</Email>
                    <Input/>
                    <Pswd>Last Name</Pswd>
                    <Input/>
                    <Pswd>Email</Pswd>
                    <Input/>
                    <Pswd>Password</Pswd>
                    <Input/>
                </SecondPart>
                <ThirdPart>
                   CREATE
                </ThirdPart>
                
            </MainBlock>
        )
    }
}

export default Login;

