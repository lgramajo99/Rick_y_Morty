import styles from './Cards.module.css'
import Card from '../card/Card';

export default function Cards({ characters, onClose }) {

   return (
      <div className={styles.containerTotal}>
         <div className={styles.container}>
            {characters.map(({ gender, id, image, name, species }) => {
               return <Card key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  id={id}
                  onClose={() => onClose(id)} />
            })}
         </div>
      </div>
   )
}

