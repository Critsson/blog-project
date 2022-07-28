const pool = require("../../../../database/db")

export default async function handler(req, res) {
    if (req.method === "POST") {

        const { title, description } = req.body

        try {
            const postDraft = await pool.query("INSERT INTO unpublished (name, email, description) VALUES($1, $2, $3) RETURNING *;", [title, description])
            if (postDraft.rows.length > 0) {
                res.status(200).json([...postDraft.rows, { success: true }])
            } else {
                res.status(406).json({ success: false, message: "Action was unsuccessful" })
            }

        } catch (err) {
            res.status(400).send(err)
        }
    } else if (req.method === "GET") {
        try {
            const getAllDrafts = await pool.query("SELECT * FROM unpublished;")
            if (getAllDrafts.rows.length > 0) {
                res.status(200).json([...getAllDrafts.rows, { success: true }])
            } else {
                res.status(406).json({ success: false, message: "Action was unsuccessful" })
            }
        } catch (err) {
            res.status(400).send(err)
        }
    }
}