const pool = require("../../../../database/db")

export default async function handler(req, res) {
    if(req.method === "GET") {
        try {
            const {postId} = req.query
            const getBlogPost = await pool.query("SELECT * FROM posts WHERE pid = $1", [postId])
            if(getBlogPost.rows.length > 0) {
                res.status(200).json([...getBlogPost.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }
        } catch (err) {
            res.status(400).send(err)
        }
    } else if(req.method === "DELETE") {
        try {
            const {postId} = req.query
            const deleteBlogPost = await pool.query("DELETE FROM posts WHERE pid = $1 RETURNING *;", [postId])
            if(deleteBlogPost.rows.length > 0) {
                res.status(200).json([...deleteBlogPost.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }

        } catch (err) {
            res.status(400).send(err)
        }
    }
}