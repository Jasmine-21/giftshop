import React,{Component} from 'react'
import styled from 'styled-components'
import login from '../Images/login.jpg'
import Account_pic from '../Images/account.png'
import shoppingcart from '../Images/shoppingcart.png'

const MainBlock=styled.div`
display:flex;
flex-direction:row;
width:100%;
height:2em;
`
const LeftBlock=styled.div`
width:50%;
height:50%;
flex-direction:row;
display:flex;
float:left;
margin-left:5px;
flex-wrap:wrap;
`
const RightBlock=styled.div`
width:50%;
height:50%;
flex-direction:row;
justify-content: space-between;
display:flex;
float:right
`
const Description=styled.text`
text-align:center;
align-self: center;
`
const Image=styled.img`
width:0.9em;
align-self: center;
`
const Parts=styled.div`
display:flex;
flex-direction:row
`
const Part1=styled.div`
display:flex;
flex-direction:row;
margin:2px;
`
const Lang=styled.text`align-self: center;`

class Login extends React.Component{
    render(){
        return(
            <MainBlock>
                <LeftBlock>
                    <Part1>
                        <Lang>Language:English</Lang>
                       
                        </Part1>
                        <Part1>
                        
                        <Lang>Currency:USD</Lang>
                        </Part1>
                </LeftBlock>
                <RightBlock>
                    <Parts>
                        <Image src={login}/>
                        <Description>Login</Description>
                    </Parts>
                    <Parts>
                        <Image src={Account_pic}/>
                        <Description>My account</Description>
                    </Parts>
                    <Parts>
                        <Image src={shoppingcart}/>
                        <Description>Shopping Cart(1)</Description>
                    </Parts>
                </RightBlock>
            </MainBlock>
        )
    }
}

export default Login;