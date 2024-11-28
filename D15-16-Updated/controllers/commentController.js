import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

// Add a Comment
const addComment = async (req, res) => {
    // TODO: Implement the functionality to add a comment to a blog post
    try {
        const { text } = req.body;
        const blogId = req.params.blogId;
        const { id } = req.user;
        
        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        if (blog.author.toString() !== id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const comment = await Comment.create({ text, user: id, blog: blogId });

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add comment' });
    }
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
    // TODO: Implement the functionality to retrieve comments for a specific blog post
    try {
        const blogId = req.params.blogId;
        const comments = await Comment.find({ blog: blogId }).populate('user', 'username').populate('blog', ['title', 'content']);
        res.status(200).json(comments);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Failed to retrieve comments' });
    }
};

// Delete a Comment
const deleteComment = async (req, res) => {
    // TODO: Implement the functionality to delete a specific comment
    try {
        const commentId = req.params.id;
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        await Comment.findByIdAndDelete(commentId);

        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Failed to delete comment' });
    }
};

export { addComment, getCommentsByBlog, deleteComment };