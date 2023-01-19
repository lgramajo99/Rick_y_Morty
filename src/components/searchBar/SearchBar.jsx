import { useState } from "react";
import styles from './SearchBar.module.css'
export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')
   const handleChange = (e) => setCharacter(e.target.value)
   const nRandom = parseInt(Math.random() * 826)
   return (

      <div>
         <input type='search' name='search' value={character} onChange={handleChange} className={styles.inputSearch} />
         <button onClick={() => onSearch(character)} className={styles.botonSearch}> Agregar</button >

         <button onClick={() => onSearch(nRandom)} className={styles.botonSearch}>
            <img src="https://w7.pngwing.com/pngs/380/764/png-transparent-paper-box-computer-icons-symbol-random-icons-miscellaneous-angle-text.png"
               alt="dado alearorio" className={styles.imagen} />

         </button>
      </div >
   );
}
