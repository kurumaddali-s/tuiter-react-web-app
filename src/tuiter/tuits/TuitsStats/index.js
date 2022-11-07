import React from "react";

const TuitsStats = ( post = {"replies" : 123, "retuits" : 432, "likes" : 2345, "liked" : true}) => {

 return(


        <div className="row mt-2">
           <div className="col-3">
               <i className='fa fa-comment'>&nbsp;{post.replies}</i>
                </div>
                <div className="col-3">
                    <i className='fa fa-share-alt'>&nbsp;{post.retuits}</i>
                </div>
                <div className="col-3">

                    {post.liked ? <><i className="fa fa-heart" style = {{color:"red"}}></i></> : <><i className="fa fa-heart"></i></>}
                              &nbsp;{post.likes}
                </div>
                <div className="col-3">
                    <i className='fa fa-download'></i>
                </div>
           </div>
 );
};
export default TuitsStats;