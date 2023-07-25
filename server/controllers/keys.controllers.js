import { pool } from "../db.js";

export const getKeys = async (req, res) => {
  try {
   
    const [result] = await pool.query("SELECT * FROM `keys` ORDER BY id;");
    res.json(result)
  } catch (error) {
   return res.status(500).json({ message: error.message });
  } 
};

export const getKey = async (req, res) => {
try {
    const [result] = await pool.query('SELECT * FROM `keys` WHERE id =  ?;', [req.params.id])
  
    if (result.length === 0) 
     return res.status(404).json({message: "key not found"});
    
    res.json(result[0])
} catch (error) {
    return res.status(500).json({ message: error.message });  
}

};

export const createKey = async (req, res) => {
try {
    const {environment} = req.body
    const [result] = await pool.query(
        "INSERT INTO `keys` (`id`, `environment`) VALUES (NULL, ?);", 
        [ environment  ]
    );

    res.json({
       id:result.insertId,
       environment
    })
    console.log(result);
} catch (error) {
    return res.status(500).json({ message: error.message });  
}
    
}

export const updateKey = async (req, res) => {
try {
    const {environment} = req.body;

    const [result] = await pool.query("UPDATE `keys` SET ? WHERE `keys`.`id` = ?;", [
     req.body,
      req.params.id
     ]);
     res.json(result) 
} catch (error) {
    return res.status(500).json({ message: error.message }); 
}
};

export const deleteKey = async (req, res) => {
try {
    const [result] = await pool.query('DELETE FROM `keys` WHERE id =  ? ', [req.params.id]);
   
    if (result.affectedRows === 0)
     return res.status(404).json({message: "Key not found"});
 
    return res.sendStatus(204)
} catch (error) {
    return res.status(500).json({ message: error.message }); 
}
};