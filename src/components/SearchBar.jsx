import { useState } from "react";


export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')
   const handleChange = (e) => setCharacter(e.target.value)
   const nRandom = parseInt(Math.random() * 826)
   return (

      <div>
         <input type='search' name='search' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)}> Agregar</button >

         <button onClick={() => onSearch(nRandom)}> Random </button>
      </div >
   );
}
