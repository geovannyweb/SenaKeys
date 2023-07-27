import { useEffect } from "react";

import KeysTable from "../components/KeysTable";
import { useKeys } from "../context/KeysProvider";
function KeysPages() {
const {keys, loadKeys}= useKeys() 

  useEffect(() => {
    loadKeys();
  }, []);

  function renderMain() {
    if (keys.length === 0) return <tr><td>Para ver informació  aquí, crea un registro</td></tr>
      
    
    return keys.map((keys) => (
      <KeysTable keys={keys} key={keys.id} />
    ))
  }

  return (
    <div>
      <h1>Llaves</h1>
      <table>
      <thead>
        <tr>
        <th>Ambiente/llave</th>
        <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {renderMain()}
      </tbody>
      </table>
    </div>
  );
}

export default KeysPages;
