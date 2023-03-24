import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import LastWatch from './pages/LastWatch'
import TopMovies from './pages/TopMovies'
import Sign from './pages/Sign'
import store from './store'
import ProtectedRoute from './utils/ProtectedRoute'
import PageMovie from './pages/PageMovie'
import SearchPage from './pages/SearchPage'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'DMSans-Regular', sans-serif;
  }
`

const Background = styled.section`
  background: #2c2c2c;
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Background>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={<Sign />} />
            <Route path="/movies" element={<ProtectedRoute><TopMovies /></ProtectedRoute>} />
            <Route path="/last_watch" element={<ProtectedRoute><LastWatch /></ProtectedRoute>} />
            <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
            <Route path="/movie/:id" element={<ProtectedRoute><PageMovie /></ProtectedRoute>} />
            <Route path="/search/:query" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </Background>
    </Provider>
  </React.StrictMode>,
)
