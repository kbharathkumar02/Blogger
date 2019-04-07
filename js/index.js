var modalCreatePost = document.getElementById('createPostModal');

var btnCreatePost = document.getElementById("btnCreatePost");

var span = document.getElementById("closePostModal");

btnCreatePost.onclick = function() {
    modalCreatePost.style.display = "block";
}

span.onclick = function() {
    modalCreatePost.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalCreatePost) {
        modalCreatePost.style.display = "none";
    }
}

document.getElementById("allPosts").onclick = function () {
    location.href = "/Blogger/html/bloglist.html?_ijt=kblbrtn9lccknr14a38vs2u8vu";
};