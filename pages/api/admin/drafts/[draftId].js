const pool = require("../../../../database/db")

export default async function handler(req, res) {
    if(req.method === "GET") {
        try {
            const {draftId} = req.query
            const getDraft = await pool.query("SELECT * FROM unpublished WHERE upid = $1", [draftId])
            if(getDraft.rows.length > 0) {
                res.status(200).json([...getDraft.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }
        } catch (err) {
            res.status(400).send(err)
        }
    } else if(req.method === "DELETE") {
        try {
            const {draftId} = req.query
            const deleteDraft = await pool.query("DELETE FROM unpublished WHERE upid = $1 RETURNING *;", [draftId])
            if(deleteDraft.rows.length > 0) {
                res.status(200).json([...deleteDraft.rows, {success: true}])
            } else {
                res.status(406).json({success: false, message: "Action was unsuccessful"})
            }

        } catch (err) {
            res.status(400).send(err)
        }
    }
}