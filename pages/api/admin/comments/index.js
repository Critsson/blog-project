const pool = require("../../../../database/db")

export default async function handler(req, res) {
    if (req.method === "POST") {

        const { name, description } = req.body

        try {
            const postComment = await pool.query("INSERT INTO comments (name, description) VALUES($1, $2) RETURNING *;", [name, description])
            if (postComment.rows.length > 0) {
                res.status(200).json([...postComment.rows, { success: true }])
            } else {
                res.status(406).json({ success: false, message: "Action was unsuccessful" })
            }

        } catch (err) {
            res.status(400).send(err)
        }
    } else if (req.method === "GET") {
        try {
            const getAllComments = await pool.query("SELECT * FROM comments;")
            if (getAllComments.rows.length > 0) {
                res.status(200).json([...getAllComments.rows, { success: true }])
            } else {
                res.status(406).json({ success: false, message: "Action was unsuccessful" })
            }
        } catch (err) {
            res.status(400).send(err)
        }
    }
}