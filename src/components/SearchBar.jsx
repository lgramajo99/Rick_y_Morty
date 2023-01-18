import { useState } from "react";


export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')
   const handleChange = (e) => setCharacter(e.target.value)



   return (
      <div>
         <input type='search' name='search' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)}> Agregar</button >
      </div >
   );
}
