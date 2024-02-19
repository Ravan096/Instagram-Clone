const mongoose =require("mongoose");



     const Comment = new mongoose.Schema({
        id:{
            type:mongoose.Schema.Types.ObjectId,
            auto:true
        },
    postId: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Post"
    }, 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        required: true
    },
        likes: {type: Number,
        default: 0
    }, 
      createdAt: {type: Date, 
      default: Date.now
      }
    });

    module.exports= mongoose.model("Comment",Comment)