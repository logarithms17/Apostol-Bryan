import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import { addComment, getCommentsByBlog, deleteComment } from "../controllers/commentController.js";

const router = express.Router();

//Routes
router.post("/:blogId", authMiddleware, addComment);
router.get("/:blogId", getCommentsByBlog);
router.delete("/:id", authMiddleware, deleteComment);

export default router;