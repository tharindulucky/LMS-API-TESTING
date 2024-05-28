import express from "express";

const authRoutes = express.Router();

authRoutes.get('/', (req, res) => {
    return res.status(200).json({
        message: "Success"
    })
});

export default authRoutes;