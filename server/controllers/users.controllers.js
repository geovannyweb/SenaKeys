import { pool } from "../db.js";

export const getUsers = async (req, res) => {
   try {
     const [result] = await pool.query("SELECT * FROM `users` ORDER BY id;")
    console.log(result);
    res.json(result)
   } catch (error) {
    return res.status(500).json({ message: error.message }); 
   }
}

export const getUser = async (req, res) => {
   try {
     const [result] = await pool.query('SELECT * FROM `users` WHERE id =  ?;', [req.params.id])
  
   if (result.length === 0) 
    return res.status(404).json({message: "User not found"});
   
   res.json(result[0])
   } catch (error) {
    return res.status(500).json({ message: error.message }); 
   }
}

export const createUser = async (req, res) => {
try {
        const {name, last_name, dni, type_dni, mail, password, role} = req.body
    const [result] = await pool.query(
        "INSERT INTO `users` (`id`, `name`, `last_name`, `dni`, `type_dni`, `mail`, `password`, `role`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?);", 
        [ name, last_name, dni, type_dni, mail, password, role ]
    );

    res.json({
       id:result.insertId,
       name, 
       last_name, 
       dni,
       type_dni, 
       mail,
       password,
       role,
    })
    console.log(result);
    
} catch (error) {
    return res.status(500).json({ message: error.message });
}
}

export const updateUser = async(req, res) => {
     try {
         const {name, last_name, dni, type_dni, mail, password, role} = req.body

    const [result] = await pool.query("UPDATE `users` SET ? WHERE id = ?;", [
     req.body,
      req.params.id
     ]);

     res.json(result) 

     } catch (error) {
     return res.status(500).json({ message: error.message }); 

     }
    
}

export const deleteUser = async(req, res) => {
try {
       const [result] = await pool.query('DELETE FROM `users` WHERE id =  ? ', [req.params.id]);
   
    if (result.affectedRows === 0)
     return res.status(404).json({message: "User not found"});
 
    return res.sendStatus(204)
} catch (error) {
    return res.status(500).json({ message: error.message }); 
} 
}