const PostSummary = (posts) =>{

    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src="${posts.image}" class="rounded-circle" width="50px" height="50px">
                </div>
                <div class="col-10">
                    <div class="text-secondary">${posts.username}</div>
                    <i class="fa fa-circle-check fa-inverse"></i><br>
                    <span class="fw-bolder">${posts.handle}&nbsp;.&nbsp;${posts.timeframe}</span><br>
                    <span class="fw-bolder">${posts.content}</span>
                </div>
            </div>
            <div class="row mt-3">
                    <img src="${posts.cardImage}" class="fluid">
                        <h5 class="card-title">${posts.cardTitle}</h5>
                        <p class="card-text">${posts.cardBody}</p>

            </div>
            <div class="row mt-2">
                <div class="col-3">
                    <i class='fa fa-comment'>&nbsp;${posts.comments}</i>
                </div>
                <div class="col-3">
                    <i class='fa fa-share-alt'>&nbsp;${posts.shares}</i>
                </div>
                <div class="col-3">
                    <i class='fa fa-heart'>&nbsp;${posts.hearts}</i>
                </div>
                <div class="col-3">
                    <i class='fa fa-download'></i>
                </div>
            </div>
        </div>
    `);
}

export default PostSummary;