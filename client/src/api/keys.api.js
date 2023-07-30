import axios from "axios";

export const getKeysRequest = async (keys) => 
await axios.get('http://localhost:4000/keys', keys)

export const createKeysRequest = async (keys) => 
await axios.post('http://localhost:4000/key', keys)

export const deleteKeysRequest = async (id) => 
await axios.delete(`http://localhost:4000/key/${id}`, id)

export const getKeyRequest = async (id) => 
await axios.get(`http://localhost:4000/key/${id}`, id)

export const updateKeyRequest = async (id, newFields) =>
await axios.put(`http://localhost:4000/key/${id}`, newFields)
