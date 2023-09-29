const Post = require('../models/Post');

exports.createPost =async (req,res,next)=>{
    const {user,caption,image,likes,comments,}= req.body;

    const post = await Post.create({
        user,
        caption,
        image,
        likes,
        comments
    });
    
    res.status(201).json({
        success:true,
        post
    })
}


exports.getPost = async(req,res,next)=>{
    const {id}= req.body;
        try {
          const posts = await Post.findById(id);
          res.status(201).json({
            success:true,
            posts
          })
        } catch (err) {
          res.status(500).json({
            success:false,
            message: err.message });
        }
    }


exports.updatePost= async(req,res,next)=>{
    // const {caption}= req.body;
    const newPostData={
        caption:req.body.caption
    }
    try {
        const post= await Post.findByIdAndUpdate(req.params.id,newPostData,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        });
        await post.save();
        res.status(201).json({
            success:true,
            post,
            message:"post updated successfully"
        });
      } catch (err) {
        res.status(404).json({
            success:false,
            message: err.message });
      }
}

exports.deletePost= async(req,res,next)=>{
    const { id } = req.params;
      try {
        const post = await Post.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            post,
            message: "Post deleted successfully" });
      } catch (err) {
        res.status(404).json({
             success:false,
             message: err.message,
            });
      }
}

