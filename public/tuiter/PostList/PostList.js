import PostSummary from "./PostSummary.js"
import posts from "./PostItem.js";
const PostList = () => {
    const res=`
    <div class="list-group wd-post-list-group">
        ${posts.map(p=>{
             return PostSummary(p);
    }).join('')
    }
    </div>
    `
    return res;
}

export default PostList;