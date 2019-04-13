var modalCreatePost = document.getElementById('createPostModal');

var btnCreatePost = document.getElementById("btnCreatePost");

var span = document.getElementById("closePostModal");

//Display Create Post Model
btnCreatePost.onclick = function() {
    modalCreatePost.style.display = "block";
}

//Close the modal
span.onclick = function() {
    modalCreatePost.style.display = "none";
}

//Redirect to bloglist
document.getElementById("allPosts").onclick = function () {
    var blogPage="bloglist.html";
    document.location.href = "\html/"+blogPage;
};