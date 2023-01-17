// import { name, species, gender, image } from '../../data'

export default function Card(props) {
   return (
      <div>
         <button onClick={() => alert("cerrado")}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}
