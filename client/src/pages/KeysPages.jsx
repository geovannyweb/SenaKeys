import { useEffect, useState } from "react";
import { getKeysRequest } from "../api/keys.api";
import KeysTable from "../components/KeysTable";
function KeysPages() {
  const [keys, setkeys] = useState([]);

  useEffect(() => {
    async function loadKeys() {
      const response = await getKeysRequest();
      setkeys(response.data);
    }
    loadKeys();
  }, []);
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
      {keys.map((keys) => (
        <KeysTable keys={keys} key={keys.id} />
      ))}
      </tbody>
      </table>
    </div>
  );
}

export default KeysPages;
