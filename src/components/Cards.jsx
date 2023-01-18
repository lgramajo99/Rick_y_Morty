import Card from './card/Card';

export default function Cards({ characters, onClose }) {

   return (<div>
      {characters.map(({ gender, id, image, name, species }) => {
         return (
            <Card key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={() => onClose(id)}
            />
         )
      })}
   </div>)
}

