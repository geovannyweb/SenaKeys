import axios from "axios";

export const getKeysRequest = async (keys) => 
await axios.get('http://localhost:4000/keys', keys)

export const createKeysRequest = async (keys) => 
await axios.post('http://localhost:4000/key', keys)
