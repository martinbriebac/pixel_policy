const express = require('express');
const app = express();
const mongoose = require('./config/mongo');
const BlogPost = require('./models/BlogPost');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define API routes
App.get('/api/blogposts', async (req, res) => {
    const blogposts = await BlogPost.find();
    res.json(blogposts);
});

app.post('/api/blogposts', async (req, res) => {
    const blogspot = new BlogPost(req.body);
    await blogpost.save();
    res.json(blogpost);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});