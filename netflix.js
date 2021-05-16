var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log("click");
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'queensgambit.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'crown.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'murder.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'dark.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'sexed.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'bridgerton.jpg';

imgArray[6] = new Image();
imgArray[6].src = 'strangerthings.jpg';

imgArray[7] = new Image();
imgArray[7].src = 'haunting.jpg';

imgArray[8] = new Image();
imgArray[8].src = 'pose.jpg';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}


var imgArray1 = new Array();

imgArray1[0] = new Image();
imgArray1[0].src = 'marainey.jpg';

imgArray1[1] = new Image();
imgArray1[1].src = 'piecesofawoman.jpg';

imgArray1[2] = new Image();
imgArray1[2].src = 'da-5-bloods.jpg';

imgArray1[3] = new Image();
imgArray1[3].src = 'mank.jpg';

imgArray1[4] = new Image();
imgArray1[4].src = 'trial.jpg';

imgArray1[5] = new Image();
imgArray1[5].src = 'latasha.jpg';

imgArray1[6] = new Image();
imgArray1[6].src = 'lifeahead.jpg';

imgArray1[7] = new Image();
imgArray1[7].src = 'octopusteacher.jpg';

imgArray1[8] = new Image();
imgArray1[8].src = 'overthemoon.jpg';

/*------------------------------------*/

function nextImage1(element1)
{
    var img1 = document.getElementById(element1);

    for(var j = 0; j < imgArray1.length;j++)
    {
        if(imgArray1[j].src == img1.src) // << check this
        {
            if(j === imgArray1.length){
                document.getElementById(element1).src = imgArray1[0].src;
                break;
            }
            document.getElementById(element1).src = imgArray1[j+1].src;
            break;
        }
    }
}