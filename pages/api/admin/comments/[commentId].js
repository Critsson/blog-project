const pool = require("../../../../database/db")

export default async function handler(req, res) {
    if(req.method === "GET") {
        try {
            const {commentId} = req.query
            const getComment = await pool.query("SELECT * FROM comments WHERE cid = $1", [commentId])
            if(getComment.rows.length > 0) {
                res.status(200).json([...getComment.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }
        } catch (err) {
            res.status(400).send(err)
        }
    } else if(req.method === "DELETE") {
        try {
            const {commentId} = req.query
            const deleteComment = await pool.query("DELETE FROM comments WHERE cid = $1 RETURNING *;", [commentId])
            if(deleteComment.rows.length > 0) {
                res.status(200).json([...deleteComment.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }

        } catch (err) {
            res.status(400).send(err)
        }
    }
}