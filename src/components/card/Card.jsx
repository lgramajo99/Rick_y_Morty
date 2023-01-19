import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
   return (
      <div className={styles.container}>
         <div className={styles.card}>
            <div className={styles.face1}>
               <div className={styles.content}>
                  <img src={image} alt={name} />
                  <h3>{name}</h3>
               </div>
            </div>
            <div className={styles.face2}>
               <div className={styles.content}>
                  <h4>Especies: {species}</h4>
                  <h4>Genero: {gender}</h4>
                  <Link to={`/detail/${id}`}>
                     <h4>{name}</h4>
                  </Link>
                  <button onClick={onClose}>Borrar</button>
               </div>
            </div>
         </div >
      </div>
   );
}
