import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from '../favorites/Favorites.module.css'

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    return (
        <div>
            {
                myFavorites.map((character) => {
                    return (
                        <div>
                            <div className={styles.card}>
                                <div className={styles.face1}>
                                    <div className={styles.content}>
                                        <img src={character.image} alt={character.name} />
                                        <h3>{character.name}</h3>
                                    </div>
                                </div>
                                <div className={styles.face2}>
                                    <div className={styles.content}>
                                        <h4>Especies: {character.species}</h4>
                                        <h4>Genero: {character.gender}</h4>
                                        <Link to={`/detail/${character.id}`}>
                                            <h4>{character.name}</h4>
                                        </Link>
                                        <button onClick={character.onClose}>Borrar</button>
                                    </div>
                                </div>
                            </div >

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;