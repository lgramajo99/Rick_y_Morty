import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Nav = ({ onSearch, aleatorio }) => {



    return <div>
        {/* <button disabled>Personaje aleatorio</button> */}

        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>

        <SearchBar onSearch={onSearch} aleatorio={aleatorio} />
    </div>
}

export default Nav;