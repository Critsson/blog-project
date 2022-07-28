const pool = require("../../../../database/db")

export default async function handler(req, res) {
    if(req.method === "GET") {
        try {
            const {contactId} = req.query
            const getContact = await pool.query("SELECT * FROM contact WHERE ceid = $1", [contactId])
            if(getContact.rows.length > 0) {
                res.status(200).json([...getContact.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }
        } catch (err) {
            res.status(400).send(err)
        }
    } else if(req.method === "DELETE") {
        try {
            const {contactId} = req.query
            const deleteContact = await pool.query("DELETE FROM contact WHERE ceid = $1 RETURNING *;", [contactId])
            if(deleteContact.rows.length > 0) {
                res.status(200).json([...deleteContact.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }

        } catch (err) {
            res.status(400).send(err)
        }
    }
}