export default function SearchBar(props) {
   // const onSearch = () => { }
   return (
      <div>
         <input type='search' name='search' id='' />
         <button onClick={() => props.onSearch('ID')}> Agregar</button >
      </div >
   );
}
