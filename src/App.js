import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) setCharacters((oldChars) => [...oldChars, data]);
        else window.alert('No hay personajes con ese ID')
      })
  }

  const onClose = (id) => { setCharacters(characters.filter(character => character.id !== id)) }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        < Route path='/about' element={<About />} />
      </Routes>
    </div >
  )
}

export default App
