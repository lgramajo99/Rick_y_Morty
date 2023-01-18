import SearchBar from './SearchBar';

const Nav = ({ onSearch }) => {



    return <div>
        <button disabled>Personaje aleatorio</button>
        <SearchBar onSearch={onSearch} />
    </div>
}

export default Nav;