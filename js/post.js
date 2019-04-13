/*This method is called when edit button is clicked by user on the blog post*/
function editBlog(button) {
        document.getElementById("btn-blog-edit").style.display = 'none';
        document.getElementById("btn-blog-save").style.display = 'block';

        var blogTitleNew = document.getElementById("blogTitleNew");
        var blogBody = document.getElementById("blogBody");
        var inputblogTitleNew = document.createElement('textarea');

        inputblogTitleNew.name = 'bodyTitleNew';
        inputblogTitleNew.id='txtAreaBodyTitleNew';

        var editableText = inputblogTitleNew;
        editableText.innerHTML=blogTitleNew.innerHTML;
        blogTitleNew.replaceWith(editableText); //Make the blog title editable

        var inputblogBody = document.createElement('textarea');
        inputblogBody.name = 'blodBody';
        inputblogBody.id='txtAreablogBody';
        inputblogBody.setAttribute("class","blogText");

        var editableText = inputblogBody;
        editableText.innerHTML=blogBody.innerHTML;
        blogBody.replaceWith(editableText); //Make the blog content editable
}

/*This method is called when save button is clicked by user when blog p[ost is in edit mode and save changes*/
function saveButton(button){
        document.getElementById("btn-blog-edit").style.display = 'block';
        document.getElementById("btn-blog-save").style.display = 'none';

        var blogTitleNew = document.getElementById("txtAreaBodyTitleNew");
        var blogBody = document.getElementById("txtAreablogBody");
        var parablogTitleNew = document.createElement('p');
        parablogTitleNew.name = 'parabodyTitleNew';
        parablogTitleNew.id="parablogTitleNew";

        var editablePara = parablogTitleNew;
        editablePara.innerHTML=blogTitleNew.value;
        blogTitleNew.replaceWith(editablePara); //Modifying the blog title

        var parablogBody = document.createElement('p');
        parablogBody.name = 'blodBody';
        parablogBody.id='txtareablogBody';

        var paraBlogBody = parablogBody;
        paraBlogBody.innerHTML=blogBody.value;
        blogBody.replaceWith(paraBlogBody); //Modifying the blog content
}

var i=0;
/*This method is called when user clicks on like button*/
function likeButton(button) {
    button.innerHTML="<i class='fa fa-thumbs-up'></i> Liked!"
    i++;
    if (i==1) {
        //When user clicks for first time
        document.getElementById("likePara").innerHTML = i + " person likes this!";
    } else {
        //When user clicks for subsequent times
        document.getElementById("likePara").innerHTML = i + " people have liked this!";
    }

}

/*This method is called when user clicks on comment button*/
function commentButton(){
    //Get comments text
    var text=document.getElementById("comments").value;
    //Create a new para for comment
    var para=document.createElement('p');
    para.setAttribute("class","all-comments-text")
    para.innerText = text;
    //Get all comments section
    var oBody = document.getElementById("allComments");
    oBody.insertBefore(para, oBody.childNodes[0]);
    document.getElementById("comments").value="";
}