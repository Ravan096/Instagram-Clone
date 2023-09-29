const express= require('express');
const {createPost,getPost,updatePost,deletePost} = require('../controller/postController');


const router= express.Router();



router.route("/createpost").post(createPost);
router.route("/getpost").get(getPost);
router.route("/update/posts/:id").put(updatePost);
router.route("/delete/posts/:id").delete(deletePost);

module.exports= router;