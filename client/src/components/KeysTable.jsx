
import { useKeys } from "../context/KeysProvider.jsx";
function KeysTable({ keys }) {

 const {deleteKeys} = useKeys()



  return (
   
   
      
      <tr>
       <td>{keys.environment}</td>
        <td>
          <button onClick={() => deleteKeys(keys.id)}>Eliminar</button>
          <button>Editar</button>
        </td>
        </tr>
      
    
   
  )
}

export default KeysTable