import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import LastWatch from './pages/LastWatch'
import Movies from './pages/Movies'
import Sign from './pages/Sign'
import store from './store'
import ProtectedRoute from './utils/ProtectedRoute'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'DMSans-Regular', sans-serif;
  }
`

const Background = styled.section`
  background: linear-gradient(to right, #000000, #bdbdbd);
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Background>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={<Sign />} />
            <Route path="/movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
            <Route path="/last_watch" element={<ProtectedRoute><LastWatch /></ProtectedRoute>} />
            <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </Background>
    </Provider>
  </React.StrictMode>,
)
