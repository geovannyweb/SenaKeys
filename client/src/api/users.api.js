import axios from "axios";

export const getUsersRequest = async (users) => 
await axios.get('http://localhost:4000/users', users)

export const createUsersRequest = async (users) => 
await axios.post('http://localhost:4000/user', users)

export const deleteUsersRequest = async (id) => 
await axios.delete(`http://localhost:4000/user/${id}`, id)