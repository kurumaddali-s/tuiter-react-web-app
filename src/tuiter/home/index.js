import React from "react";
//import PostSummaryList from "../PostList";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
 return(
   <div className="row mt-2">
      <div className="position-relative">
      <h4>Home</h4>
      <WhatsHappening/>
      <TuitsList/>
      </div>
     </div>
 );
};
export default HomeComponent;

