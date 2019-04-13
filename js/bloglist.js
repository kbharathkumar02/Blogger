   function deletePost(id){
   //getting the DOM id for the passed in element
    var idSplit= id.split("-");
    var idNum = idSplit[2];

//creating the var to get th corresponding element
    var blogListModalIndex="blog-list-modal-"+idNum
    var blogListModal = document.getElementById(blogListModalIndex);
//rendering the modal on click of the button.
    if(blogListModal.style.display=="" || blogListModal.style.display=="none"){
        blogListModal.style.display="block";
    }
    //creating the var to get th corresponding element
    var postDeleteBtnIndex="post-delete-"+idNum
    var postDeleteBtn = document.getElementById(postDeleteBtnIndex);
//creating the var to get th corresponding element
    var deletePostModalYesIndex = "delete-post-modal-yes-"+idNum;
    var deletePostModelYes= document.getElementById(deletePostModalYesIndex);
    deletePostModelYes.onclick = function() {
    //stopping the propagation to parent models
        event.stopPropagation();
    }

//creating the var to get th corresponding element
    var deletePostModalNoIndex = "delete-post-modal-no-"+idNum;
    var deletePostModelNo = document.getElementById(deletePostModalNoIndex)
    deletePostModelNo.onclick = function() {
        event.stopPropagation();
        blogListModal.style.display = "none";
    }
//stopping the propagation to parent models
    window.onclick = function(event) {
      event.stopPropagation();
        if (event.target == blogListModal) {
          blogListModal.style.display = "none";
        }
    }
}

//invoking the function to load the corresponding post content
function loadPostContent(id){
    console.log(id);
    var idSplit= id.split("-");
    var idNum = idSplit[2];

//creating the var to get the corresponding element
   var blogListModalIndex="blog-list-modal-"+idNum
   var redirect="\post.html";
   window.location.href=redirect;
}

