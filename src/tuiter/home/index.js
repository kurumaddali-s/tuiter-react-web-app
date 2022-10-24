import React from "react";
import PostSummaryList from "../PostList";
import NavigationSidebar from "../navigation-sidebar";

const HomeComponent = () => {
 return(
   <div className="row mt-2">
      <div className="position-relative">
       <PostSummaryList/>
      </div>
     </div>
 );
};
export default HomeComponent;

