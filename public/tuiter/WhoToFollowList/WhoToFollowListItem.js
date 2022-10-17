
const WhoToFollowListItem=(who) => {
    return (`
             <div class="list-group-item">
                 <div class = "row">
                     <div class = "col-2">
                          <img src="${who.avatarIcon}" height="40px">
                     </div>

                     <div class = "col-7">

                         <div class = "fw-bolder">
                             ${who.userName}
                             <i class = "fa fa-circle-check fa-inverse"></i>
                         </div>

                         <div class = "text-secondary">
                             @${who.handle}
                         </div>

                     </div>

                     <div class = "col-2">

                         <button type="button" class="btn btn-primary rounded-pill">Follow</button>

                     </div>

                 </div>
             </div>
   `);
}
export default WhoToFollowListItem;