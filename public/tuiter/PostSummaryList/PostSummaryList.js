import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
return(
`<div class="list-group">
    <li class="list-group-item">
        ${
            posts.map(post => {
               return PostSummaryItem(post)
            }).join('')
        }
    </li>
</div>`);
}
export default PostSummaryList;