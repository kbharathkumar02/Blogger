var modalCreatePost = document.getElementById('createPostModal');

var btnCreatePost = document.getElementById("btnCreatePost");

var span = document.getElementById("closePostModal");

btnCreatePost.onclick = function() {
    modalCreatePost.style.display = "block";
}

span.onclick = function() {
    modalCreatePost.style.display = "none";
}

document.getElementById("allPosts").onclick = function () {
    var blogPage="bloglist.html";
    document.location.href = "\html/"+blogPage;
};