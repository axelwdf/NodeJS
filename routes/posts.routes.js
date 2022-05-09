const express = require('express');
const router = express.Router();

const {getPosts, postPosts} = require('../controllers/posts.controller');


// post posts
router.get('/',getPosts);

router.post('/', postPosts)

module.exports = {postsRouter: router}