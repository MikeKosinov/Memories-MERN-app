import mongoose from "mongoose";
import PostMessage from "../models/postMsgModel.js";

//get all posts
export const getPosts = async (req,res)=>{
    try {
        const PostMessages = await PostMessage.find();
    res.status(200).json(PostMessages);
        console.log(PostMessages);
    } catch (error) {
     res.status(404).json({message:error.message});   
    }}
//creating posts
export const createPost = async(req,res)=>{
const post = req.body;
const newPost = new PostMessage(post);

    try {
   await newPost.save();
   res.status(201).json(newPost);
} catch (error) {
    res.status(409).json(error.message);
}
}
export const updatePost = async(req,res)=>{
const {id:_id} = req.params;
const post = req.body;

if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post,_id}, {new:true});

res.json(updatedPost);
};
//function for delete an exist post
export const deletePost = async(req,res)=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await PostMessage.findByIdAndRemove(id);
    console.log(`Post with ${id} was deleted`)
    res.json({message:'Post deleted successfully'});
}
//function for count likes under of posts
export const likePost = async(req,res)=>{
    const{ id }=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount: post.likeCount +1}, {new:true});

    res.json(updatedPost);
}



