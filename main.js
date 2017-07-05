var modal = document.getElementById("modal-image");
var img = document.getElementById("img");
var modalContent = document.getElementById("img-1");
var close = document.getElementById("close-image");
var caption = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalContent.src = this.src;
    caption.innerHTML = this.alt;
};

var close = document.getElementById("close-img");

close.onclick = function(){
    modal.style.display = "none";
};
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
};