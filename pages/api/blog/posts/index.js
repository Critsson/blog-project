const pool = require("../../../../database/db")

export default async function handler(req, res) {
    if(req.method === "GET") {
        try {
            const getAllBlogPosts = await pool.query("SELECT * FROM posts;")
            if(getAllBlogPosts.rows.length > 0) {
                res.status(200).json([...getAllBlogPosts.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }

        } catch (err) {
            res.status(400).send(err)
        }
    } else if(req.method === "POST") {

        const {title, description} = req.body

        try {
            const postBlogPost = await pool.query("INSERT INTO posts (title, description) VALUES($1, $2) RETURNING *;", [title, description])
            if(postBlogPost.rows.length > 0) {
                res.status(200).json([...postBlogPost.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }

        } catch (err) {
            res.status(400).send(err)
        }
    }
}