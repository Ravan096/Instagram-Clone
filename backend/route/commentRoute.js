const express= require('express');
const {createComment,getPostRelatedComments, DeleteComment} = require('../controller/commentController');


const router= express.Router();



router.route("/createcomment").post(createComment);
router.route("/deletecomment").delete(DeleteComment);
router.route("/getcommentsbypost").get(getPostRelatedComments);

module.exports= router;