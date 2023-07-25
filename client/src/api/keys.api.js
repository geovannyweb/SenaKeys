import axios from "axios";


export const createKeysRequest = async (keys) => 
await axios.post('http://localhost:4000/key', keys)
