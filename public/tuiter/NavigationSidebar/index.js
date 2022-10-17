const NavigationSidebar = (active) => {
    return(`
            <div class="list-group mt-1">
               <li class="list-group-item list-group-item-action">
                   <i class="fab fa-twitter">
                   </i>
               </li>

               <a href ="../HomeScreen/index.html" class="list-group-item list-group-item-action
               ${active==='home'?'active':''}">
                   <div class="row">
                      <i class="fa fa-home col-xxl-2 col-xl-2"></i>
                       <div class="col-xxl-10 col-xl-10 d-none d-xl-block" style="bottom: 3px"><span>Home</span></div>
                   </div>
               </a>

               <a href="../explore/index.html" class="list-group-item list-group-item-action
               ${active==='explore'?'active':''}">
                   <div class="row">
                       <i class="fa fa-hashtag col-xxl-2 col-xl-2"></i>
                       <div class="col-xxl-10 col-xl-10 d-none d-xl-block" style="bottom: 3px"><span>Explore</span></div>
                   </div>
               </a>

               <a href ="explore/notifications.html" class="list-group-item list-group-item-action
               ${active==='notifications'?'active':''}">
                   <div class="row">
                       <i class="fa fa-bell col-xxl-2 col-xl-2"></i>
                       <div class="col-xxl-10 col-xl-10 d-none d-xl-block" style="bottom: 3px"><span> Notifications</span></div>
                   </div>
               </a>


               <a href ="explore/messages.html" class="list-group-item list-group-item-action
               ${active==='messages'?'active':''}">
                   <div class="row">
                       <i class="fa fa-envelope col-xxl-2 col-xl-2"></i>
                       <div class="col-xxl-10 col-xl-10 d-none d-xl-block" style="bottom: 3px"><span>Messages</span></div>
                   </div>
               </li>

               <a href ="explore/bookmarks.html" class="list-group-item list-group-item-action
               ${active==='bookmarks'?'active':''}">

                   <div class="row">
                       <i class="fa fa-bookmark col-xxl-2 col-xl-2"></i>
                       <div class="col-xxl-10 col-xl-10 d-none d-xl-block" style="bottom: 3px"><span>Bookmarks</span></div>
                   </div>
               </a>


               <a href ="explore/lists.html" class="list-group-item list-group-item-action
               ${active==='lists'?'active':''}">
                   <div class="row">
                       <i class="fa fa-list col-xxl-2 col-xl-2"></i>
                       <div class="col-xxl-10 col-xl-10 d-none d-xl-block" style="bottom: 3px"><span>Lists</span></div>
                   </div>
               </a>

               <a href ="explore/profile.html" class="list-group-item list-group-item-action
               ${active==='profile'?'active':''}">
                   <div class="row">
                       <i class="fa fa-user col-xxl-2 col-xl-2"></i>
                       <div class="col-xxl-10 col-xl-10 d-none d-xl-block" style="bottom: 3px"><span>Profile</span></div>
                   </div>
               </a>

               <a href ="explore/more.html" class="list-group-item list-group-item-action
               ${active==='more'?'active':''}">
                   <div class="row">
                       <i class="fa fa-ellipsis-v col-xxl-2 col-xl-2"></i>
                       <div class="col-xxl-10 col-xl-10 d-none d-xl-block" style="bottom: 3px"><span>More</span></div>
                   </div>

               </a>

            </div>
               <div class="d-grid mt-2">
                 <a href="tweet.html"
                    class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
               </div>
    `);
}
export default NavigationSidebar;
