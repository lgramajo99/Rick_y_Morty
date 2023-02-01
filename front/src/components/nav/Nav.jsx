import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import styles from './Nav.module.css';

const Nav = ({ onSearch, aleatorio }) => {



    return <div>
        {/* <button disabled>Personaje aleatorio</button> */}
        <ul className={styles.ulNav}>
            <li className={styles.liNav}><Link to='/about'>About</Link></li>
            <li className={styles.liNav}><Link to='/home'>Home</Link></li>
        </ul >

        <SearchBar onSearch={onSearch} aleatorio={aleatorio} />
    </div>
}

export default Nav;