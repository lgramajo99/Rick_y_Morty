import Card from './card/Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map((character, i) => {
         return (

            <Card key={i}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image} />
         )
      })}
   </div>
}

