const pool = require("../../../../database/db")

export default async function handler(req, res) {
    if (req.method === "POST") {

        const { name, email, description } = req.body

        try {
            const postContact = await pool.query("INSERT INTO contact (name, email, description) VALUES($1, $2, $3) RETURNING *;", [name, email, description])
            if (postContact.rows.length > 0) {
                res.status(200).json([...postContact.rows, { success: true }])
            } else {
                res.status(406).json({ success: false, message: "Action was unsuccessful" })
            }

        } catch (err) {
            res.status(400).send(err)
        }
    } else if (req.method === "GET") {
        try {
            const getAllContacts = await pool.query("SELECT * FROM contact;")
            if (getAllContacts.rows.length > 0) {
                res.status(200).json([...getAllContacts.rows, { success: true }])
            } else {
                res.status(406).json({ success: false, message: "Action was unsuccessful" })
            }
        } catch (err) {
            res.status(400).send(err)
        }
    }
}