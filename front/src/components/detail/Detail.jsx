import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css'
function Detail() {


    const { detailId } = useParams();
    const [character, setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) setCharacter(char);
                else window.alert("No hay personajes con ese ID")
            })
            .catch((err) => { window.alert("No hay personajes con ese ID") });
        return setCharacter({});
    }, [detailId]);

    const estado = () => {
        if (character?.status === 'Alive') return 'Vivo';
        else if (character?.status === 'Dead') return 'Muerto';
        else { return 'No disponible' }
    }
    const especie = () => {
        if (character?.species === 'unknown') return 'No disponible';
        else return character?.species
    }
    const genero = () => {
        if (character?.gender === 'unknown') return `No disponible`
        else {
            if (character?.gender === 'Alive') return 'Vivo'
            else return 'Muerto'
        }
    }
    return (
        < div className={styles.contenedor} >
            <div className={styles.contenedorCard}>
                <div className={styles.contenedorInfo}>
                    <h2 className={styles.titulo2}>{(character?.name)}</h2>
                    <h3 className={styles.titulo3}>Estado: {estado()}</h3>
                    <h3 className={styles.titulo3}>Especie: {especie()}</h3>
                    <h3 className={styles.titulo3}>Genero: {genero()}</h3>
                    <h3 className={styles.titulo3}>Tipo: {character?.type || `No disponible`}</h3>
                    <h3 className={styles.titulo3}>Origen: {(character?.origin?.name) === "unknown" ? 'No disponible' : character?.origin?.name}</h3>
                    <h3 className={styles.titulo3}>Localización: {(character?.location?.name === "unknown") ? 'No disponible' : character?.location?.name}
                    </h3>
                </div>
                <div className={styles.contenedorImg}>
                </div>
                <img src={character.image} alt={character.name} className={styles.imagen} />
            </div>
        </div >
    )
}

export default Detail;