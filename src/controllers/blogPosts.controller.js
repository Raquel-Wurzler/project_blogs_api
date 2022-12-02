const BlogPostsService = require('../services/blogPosts.service');

const error500Message = 'Ocorreu um erro';

const createBlogPost = async (req, res) => {
  try {
    const data = req.body;
    const newBlogPost = await BlogPostsService.createBlogPost(data);
    return res.status(201).json(newBlogPost);
  } catch (error) {
    console.info(error);
    return res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogPostsService.getById(id);
  
    if (!blogPost) return res.status(404).json({ message: 'BlogPost not found' });

    return res.status(200).json(blogPost);
  } catch (error) {
    console.info(error);
    return res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

const getAll = async (_req, res) => {
  try {
    const blogPosts = await BlogPostsService.getAll();
    return res.status(200).json(blogPosts);
  } catch (error) {
    console.info(error);
    return res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

module.exports = {
  createBlogPost,
  getById,
  getAll,
};
