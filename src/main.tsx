import React from 'react'
import ReactDOM from 'react-dom/client'
import styled, { createGlobalStyle } from 'styled-components'
import Home from './pages/Home'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'DMSans-Regular', sans-serif;
  }
`

const Background = styled.section`
  background: linear-gradient(160deg, #000000 -2.92%, rgba(0, 0, 0, 0) 100%);
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Background>
      <Home />
    </Background>
  </React.StrictMode>,
)
