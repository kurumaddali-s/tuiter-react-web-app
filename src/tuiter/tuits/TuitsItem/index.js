import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits-reducer.js"
const TuitsItem = ({post}) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}

 return(
  <div className="list-group-item">
              <div className="row">
                  <div className="col-2">
                      <img src={`/images/${post.image}`} className="rounded-circle" width={50} height={50}
                      alt=""/>
                      <div className="text-secondary">{post.username}</div>
                      <i className="fa fa-circle-check fa-inverse"></i><br/>
                  </div>
                  <div className="col-9">
                      <span className="">{post.handle}&nbsp;.&nbsp;{post.timeframe}</span><br/>
                      <span className="">{post.tuit}</span>

                  </div>
                  <div className="col-1">
                  <i className="bi bi-x-lg float-end"
                  onClick={() => deleteTuitHandler(post._id)}></i>
                  </div>
              </div>

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

          </div>
 );
};
export default TuitsItem;