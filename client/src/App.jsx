import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCreate from './components/game-create/GameCreate'
import GameCatalog from './components/game-catalog/GameCatalog'
import GameDetails from './components/game-details/GameDetails'
import GameEdit from './components/game-edit/GameEdit'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('');

  const userLoginHandler = (authData) => {
    setEmail(authData.email);
  }

  return (
    <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/games' element={ <GameCatalog /> } />
            <Route path='/games/create' element={ <GameCreate /> } />
            <Route path='/games/:gameId/details' element={ <GameDetails email={email} /> } />
            <Route path='/games/:gameId/edit' element={ <GameEdit /> } />
            <Route path='/login' element={ <Login onLogin={userLoginHandler} /> } />
            <Route path='/register' element={ <Register /> } />
          </Routes>
        </main>
    </div>
  )
}

export default App
