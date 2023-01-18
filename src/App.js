import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'
import Error from './components/Error';
import Form from './components/Form';

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
  }, []);

  return (
    <div className='App'>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/home' caseSensitive={true} index={true} element={<Cards onClose={onClose} characters={characters} />} />
        <Route path={'/detail/:detailId'} element={<Detail />} />
        <Route path='/about' caseSensitive={true} element={<About />} />
        <Route path='/' element={<Form login={login} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div >
  )
}

export default App
