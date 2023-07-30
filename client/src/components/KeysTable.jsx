
import { useKeys } from "../context/KeysProvider.jsx";
import {useNavigate  } from "react-router-dom";
function KeysTable({ keys }) {

 const {deleteKeys} = useKeys()
const navigate = useNavigate()


  return (
   
   
      
      <tr>
       <td>{keys.environment}</td>
        <td>
          <button onClick={() => deleteKeys(keys.id)}>Eliminar</button>
          <button onClick={() => navigate(`/Editar-Ambiente/${keys.id}`) }>Editar</button>
        </td>
        </tr>
      
    
   
  )
}

export default KeysTable