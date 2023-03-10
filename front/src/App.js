import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css'
import About from './components/About'
import Cards from './components/cards/Cards.jsx'
import Detail from './components/detail/Detail'
import Error from './components/error/Error';
import Favorites from './components/favorites/Favorites';
import Form from './components/form/Form';
import Nav from './components/nav/Nav'

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/characters/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) setCharacters((oldChars) => [...oldChars, data]);
        else window.alert('No hay personajes con ese ID')
      })
  }


  const location = useLocation();

  const onClose = (id) => { setCharacters(characters.filter(character => character.id !== id)) }

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  return (
    <div className='App'>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/home' caseSensitive={true} index={true} element={<Cards onClose={onClose} characters={characters} />} />
        <Route path={'/detail/:detailId'} element={<Detail />} />
        <Route path='/about' caseSensitive={true} element={<About />} />
        <Route path='/' element={<Form login={login} />} />
        <Route path='*' element={<Error />} />
        <Route path='/favorites' caseSensitive={true} element={<Favorites />} />
      </Routes>
    </div >
  )
}

export default App
