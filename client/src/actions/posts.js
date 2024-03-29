import { FETCH_ALL,DELETE,CREATE,UPDATE } from '../constants/actionTypes';
import * as api from '../api';

//Action creators
//function for get the posts
export const getPosts = () =>async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
//function for creating a new post
export const createPost = (post)=> async (dispatch)=>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
//function for updating the exists post
 export const updatePost = (id,post)=>async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post);
        dispatch({type: UPDATE,payload:data})
    } catch (error) {
        console.log(error.message);
    }
 };
 //function for deleting post
 export const deletePost = (id)=>async(dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({type: DELETE,payload:id})
    } catch (error) {
        console.log(error.message);
    }
 }
 //function for like post
 export const likePost = (id)=>async(dispatch)=>{
    try {
        const {data} = await api.likePost(id);
        dispatch({type:UPDATE,payload:data})
    } catch (error) {
        console.log(error.message);
    }
 }

