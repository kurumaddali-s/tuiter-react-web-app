import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
return(`<div class="list-group">
    <li class="list-group-item"><b>Who to follow</b></li>
    <li class="list-group-item">
        ${
            who.map(whose => {
               return WhoToFollowListItem(whose)
            }).join('')
        }
    </li>
</div>`);
}
export default WhoToFollowList;

