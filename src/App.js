import React, { Component } from 'react';
import './App.css';
import Heading from './Header/Heading'
import Body from './BodyPart/Body'
import styled from 'styled-components'


const MainBlock=styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;

box-sizing: border-box;
`
function App() {
  return (
    <MainBlock>
      <Heading/>
      <Body/>
    </MainBlock>
  );
}

export default App;
