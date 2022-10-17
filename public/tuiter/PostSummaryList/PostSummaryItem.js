
const PostSummaryItem =(post) => {
    return (`
<div class="list-group-item">
    <div class = "row">
        <div class = "col-10">
            <div class = "text-secondary">
                <b>${post.topic}</b>
            </div>
            <div class = "fw-bolder">
                <p>
                    <b>${post.userName}</b>
                    <i class = "fas fa-check-circle"></i>
                    <span class = "grey-in-list">-${post.time}</span>
                </p>

                <p><b>
                    ${post.title}</b>
                </p>
            </div>
        </div>
        <div class = "col-2">
            <img src="${post.image}" height="40px">
        </div>
    </div>
  </div>
   `);
}
export default PostSummaryItem;