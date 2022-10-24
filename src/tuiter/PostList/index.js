import React from "react";
import postsArray from './postItem.json';
import PostSummaryItem from "./PostSummary";

const PostSummaryList = () => {
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <PostSummaryItem
                    key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostSummaryList;

