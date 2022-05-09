const {posts} = require('../models/post.model')

const getPosts = (req, res) => {
    res.status(200).json({ posts });
}

const postPosts = (req, res)=>{
    const {title} = req.body;

    const newPost = {
        id: Math.floor(Math.random() * 10),
        title,
    };

    posts.push(newPost);

    res.status(201).json({ newPost });
}

module.exports = {getPosts, postPosts}