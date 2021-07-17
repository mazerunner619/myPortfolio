var img = document.getElementsByClassName("cover-pic")[0];

$(img).fadeIn();

var img1 = "./images/MyCoverPic1.jpg";
var img2 = "./images/MyCoverPic2.jpg";

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){

    setInterval(() => {

        $(img).fadeToggle();
        $(img).fadeToggle();

        if($(img).attr("src") == img1){
      $(img).attr("src", img2);

        }else{
            $(img).attr("src", img1);
        }
        setTimeout(()=>{
        } ,3500);

    }, 4000);

  });

