import React from "react";
import {useSelector} from "react-redux";
//import PostSummaryItem from "./PostSummary";
import TuitsItem from "../TuitsItem";

const PostSummaryList = () => {
const postsArray = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <TuitsItem
                    key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostSummaryList;



