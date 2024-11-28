import Blog from '../models/Blog.js';
// Create a new blog post
const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const blog = await Blog.create({ title, content, author: req.user.id });
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all blog posts
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username');
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a blog post by ID
const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id).populate('author', 'name');
        if (!blog) return res.status(404).json({ error: 'Blog not found' });

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

//Update a blog post by id
const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const blog = await Blog.findById(id);
        //Error handling if blog is not found
        if (!blog) return res.status(404).json({ error: 'Blog not found' });
        

        if (blog.author.toString() !== req.user.id) return res.status(401).json({ error: 'Unauthorized' });

        blog.title = title;
        blog.content = content;
        await blog.save();

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

//Delete a blog post by id

const deleteBlog = async (req, res) => { 
    console.log(req.user)
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);

        //Error handling if blog is not found
        if (!blog) return res.status(404).json({ error: 'Blog not found' });

        //Error handling if user is not the author
        if (blog.author.toString() !== req.user.id) return res.status(401).json({ error: 'Unauthorized' });

        await Blog.deleteOne({ _id: id });
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server error' });
    }
}

export { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };