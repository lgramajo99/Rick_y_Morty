import SearchBar from './SearchBar';

const Nav = ({ onSearch }) => {

    

    return <div>
        <button>Personaje aleatorio</button>
        <SearchBar onSearch={onSearch} />
    </div>
}

export default Nav;