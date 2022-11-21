import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
//import PostSummaryItem from "./PostSummary";
import TuitsItem from "../TuitsItem";
import {findTuitsThunk, deleteTuitThunk}
  from "../../../services/tuits-thunks";

const PostSummaryList = () => {
// eslint-disable-next-line no-unused-vars
const {tuits, loading} = useSelector(state => state.tuitsData)
//const postsArray = useSelector(state => state.tuits)
const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findTuitsThunk())
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

 return(
   <div className="list-group">
     {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }
    
     {
        tuits.map(tuit =>
          //  <li className="list-group-item"
          //  key={tuit._id}>
          //    {tuit.handle}
          //    {tuit.tuit}
          //    {tuit.likes}
          //    {tuit.image}
          //    {tuit.title}
          //  </li>

           {
             return (<TuitsItem key={tuit._id} post = {tuit}/>);
           }
        )  
     }

   </div>
 );
};
export default PostSummaryList;



