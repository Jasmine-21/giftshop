import React, { Component } from 'react'
import styled from 'styled-components'
import LOCATION from '../Images/location.png'
import HOTLINE from '../Images/telephone.png'
import Searchbox from '../Images/search.png'
import Gift_icon from '../Images/gift_icon.jpg'

const MainBlock = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:2em;`

const Leftblock = styled.div`
width:30%;
height:50%;
flex-direction:row;
display:flex;
float:left;
margin-left:6%;`

const MiddleBlock = styled.div`
width:30%;
align-self:center;
`


const RightBlock = styled.div`
width:40%;
height:50%;
flex-direction:row;
justify-content: space-between;
display:flex;
float:right;
`
const Parts = styled.div`display:flex;
flex-direction:row`

const Image = styled.img`
width:10%;
align-self: center;`

const GiftImage = styled.img`
margin-left:6%;
width:10%;
align-self: center;`

const Description = styled.text`
text-align:center;
align-self: center;`

const GiftDescription = styled.text`
color:pink;
font-family:Arial;
margin-top:3%;
text-align:center;
align-self: center;`

const Input = styled.input`
  width: 45%;
  border: 2px solid #aaa;
  border-radius: 1px;

`;

const StyledInput = styled.p`
  
`;
class Contact extends React.Component {
    render() {
        return (
            <MainBlock>
                <Leftblock>
                    <GiftImage src={Gift_icon}/>
                    <GiftDescription>GiftBox</GiftDescription>
                </Leftblock>
                <MiddleBlock>
                    <StyledInput>
                        <Input placeholder="Search" /></StyledInput>
                </MiddleBlock>
                <RightBlock>
                    <Parts>
                        <Image src={LOCATION} />
                        <Description>STORE LOCATOR</Description>
                    </Parts>
                    <Parts>
                        <Image src={HOTLINE} />
                        <Description> HOTLINE:0123-456-789</Description>
                    </Parts>
                </RightBlock>
            </MainBlock>
        )
    }
}

export default Contact;


