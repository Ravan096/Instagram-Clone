const Comment = require('../models/commentModel');
const Post = require('../models/Post');
const User= require('../models/userModel')

exports.createComment =async (req,res,next)=>{
    const {postId,content,userId}= req.body;
    try {
      // const post = await Post.findById(req.params.id);
      const post = await Post.findById(postId);
  
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post not found",
        });
      }
  
      let commentIndex = -1;
      // Checking if comment already exists
  
      post.comments.forEach((item, index) => {
        // if (item.user.toString() === req.user._id.toString()) {
        if (item.user.toString() === userId.toString()) {
          commentIndex = index;
        }
      });
  
      if (commentIndex !== -1) {
        // post.comments[commentIndex].comment = req.body.comment;
        // post.comments[commentIndex].comment = content;
        post.comments[commentIndex].text = content;
        await post.save();
        return res.status(200).json({
          success: true,
          message: "Comment Updated",
        });
      } else {
        post.comments.push({
          // user: req.user._id,
          user: userId,
          // comment: req.body.comment,
          text: content
        });
  
        await post.save();
        return res.status(200).json({
          success: true,
          message: "Comment added",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }    
}


exports.DeleteComment = async (req, res) => {
  const {postId,commentId,userId}= req.body;
  try {
    // const post = await Post.findById(req.params.id);
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    // Checking If owner wants to delete

    if (post.user.toString() === userId.toString()) {
      if (commentId === undefined) {
        return res.status(400).json({
          success: false,
          message: "Comment Id is required",
        });
      }

      post.comments.forEach((item, index) => {
        if (item._id.toString() === commentId.toString()) {
          return post.comments.splice(index, 1);
        }
      });

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Selected Comment has deleted",
      });
    } else {
      post.comments.forEach((item, index) => {
        if (item.user.toString() === req.user._id.toString()) {
          return post.comments.splice(index, 1);
        }
      });

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Your Comment has deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};





exports.getPostRelatedComments =async (req,res,next)=>{
    const post = await Post.findOne({ _id: req.params.id });
    const comment = new Comment();
    comment.content = req.body.content;
    comment.post = post._id;
    await comment.save();
    post.comments.push(comment._id);
    await post.save();
    res.send(comment);
    res.status(201).json({
        success:true,
        comment
    })
}





// Get post by id function
exports.getPostById = async (req, res, next) => {
    const { postId } = req.params;
  
    // Find the post by id and populate its comments and users
    const post = await Post.findById(postId)
      .populate({
        path: "comments",
        populate: {
          path: "user"
        }
      })
      .lean();
  
    // Send the response with the post details
    res.status(200).json({
      success: true,
      post
    });
  };


  
  // Create comment function
  exports.createComment = async (req, res, next) => {
    const { postId, content, userId } = req.body;
  
    // Find the post by id
    const post = await Post.findById(postId);
  
    // Create a new comment with the content and user id
    const comment = new Comment({
      content,
      user: userId
    });
  
    // Save the comment
    await comment.save();
  
    // Push the comment id to the post's comments array
    post.comments.push(comment.id);
  
    // Save the post
    await post.save();
  
    // Send the response with the comment, post, and user details
    res.status(201).json({
      success: true,
      comment,
      commentId: comment.id,
      post,
      user: await User.findById(userId)
    });
  };
  
  