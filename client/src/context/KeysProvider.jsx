import {  useContext, useState } from "react";
import { getKeysRequest, deleteKeysRequest, createKeysRequest } from "../api/keys.api";
import { KeysContext } from "./KeysContext";


export const useKeys = () => {
    const context = useContext(KeysContext);
    if(!context){
    throw new Error("El usekKeys debería de estar dentro del elemento KeysContextProvider")
    }
    return context;
}

export const KeysContextProvider = ( { children } ) => {

    const [keys, setkeys] = useState([]);
    async function loadKeys() {
        const response = await getKeysRequest();
        setkeys(response.data);
      }

      const deleteKeys = async (id) => {
        try {
         const response =  await deleteKeysRequest(id)
         setkeys(keys.filter(keys => keys.id !== id))
        } catch (error) {
          console.error(error);
        }
      }  
      
      const createKeys = async (keys) => {
        try {
          const response = await createKeysRequest(keys)
          console.log(response);
         
         } catch (error) {
          console.error(error);
         }
      }
       
  return ( 
     <KeysContext.Provider value={{ keys, loadKeys, deleteKeys, createKeys }}>
    {children}
    </KeysContext.Provider>
    );
};