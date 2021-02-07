import React,{Component} from 'react'
import Login from './Login'
import Contact from './Contact'
import styled from 'styled-components'
import Nav from './Nav'
const MainBlock=styled.div`
display:flex;
flex-direction:column;
width:100%;
height:6em;
`
class Heading extends React.Component{
    render(){
        return(
           <MainBlock>
               <Login/>
               <Contact/>
               <Nav/>
           </MainBlock>
        )
    }
}

export default Heading;