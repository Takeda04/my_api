import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  completed: String,
  userId: Number
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
