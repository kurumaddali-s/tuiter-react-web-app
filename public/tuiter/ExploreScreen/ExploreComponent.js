import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
           <div class = row>
                   <div class="col-10">
                       <div class="input-group rounded">
                           <input type="search" class="button-round form-control btn-lb btn-block rounded-pill"
                                  placeholder="&#xF002;     Search Twitter"
                                  style="font-family:Arial, FontAwesome"
                                  aria-label="Search" aria-describedby="search-addon" />

                       </div>
                   </div>
                   <div class = "col-2">
                       <i class="fa fa-cog fa-2x" style="color: blue"></i>
                   </div>
          </div>

               <ul class="nav nav-tabs mt-1">
                   <li class="nav-item">
                       <a class="nav-link active" href="#">For you</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">Trending</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">News</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">Sports</a>
                   </li>
                   <li class="nav-item">
                       <div class="text-nowrap col-4 d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                           <a class="nav-link" href="#">Entertainment</a>
                       </div>
                   </li>

               </ul>
                <div class = "position-relative">
                     <img src = "../../images/starship.jpg" class="img-fluid">
                     <h1 class = "position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>

                </div>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
