import {  useContext, useState } from "react";
import { getKeysRequest, deleteKeysRequest, createKeysRequest, getKeyRequest, updateKeyRequest } from "../api/keys.api";
import { getUsersRequest, deleteUsersRequest, createUsersRequest } from "../api/users.api"
import { KeysContext } from "./KeysContext";


// Hook de mi contexto(Llaves y usuarios)
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

      const getKey = async (id) => {
        try {
          const response = await getKeyRequest(id);
          return response.data;
        } catch (error) {
          console.error(error);
        }
      }
      const updateKey = async (id, newFields) => {
        try {
          const response = await updateKeyRequest(id, newFields);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
    
      const [users, setusers] = useState([]);

      async function loadUsers() {
        const response = await getUsersRequest();
        setusers(response.data);
      }

      const deleteUser = async(id) => {
        try {
         const response = await deleteUsersRequest(id);
         setusers(users.filter(users => users.id !== id))
        } catch (error) {
         console.error(error);
        }
       }
      
       const createUser = async(users) => {
        try {
           const response = await createUsersRequest(users)
            console.log(response);
          
         } catch (error) {
          console.error(error);
         }
       }

  return ( 
     <KeysContext.Provider value={{ keys, loadKeys, deleteKeys, createKeys, getKey, updateKey, users, loadUsers, deleteUser, createUser }}>
    {children}
    </KeysContext.Provider>
    );
};
