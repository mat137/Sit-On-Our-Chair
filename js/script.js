document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // ----------------SLIDER---------------------

  var leftArrow = document.querySelector('.slider-image a');
  var rightArrow = document.querySelector('.slider-text a');

  console.log(leftArrow);
  console.log(rightArrow);

  var chairs = document.querySelectorAll('.slider-image li');
  console.log(chairs);

  var currIndex = 0;

  chairs[0].classList.add('visible');

  //left
  leftArrow.addEventListener('click', function () {
//    console.log(currIndex);
    chairs[currIndex].classList.remove('visible');
    if (currIndex == 0) {
      currIndex = chairs.length - 1;
      chairs[currIndex].classList.add('visible');
    } else {
      chairs[currIndex - 1].classList.add('visible');
      currIndex--;
    }
  });
  //right
  rightArrow.addEventListener('click', function () {
    chairs[currIndex].classList.remove('visible');
    if (currIndex == chairs.length - 1) {
      currIndex = 0;
    } else {
      currIndex++;
    }
    chairs[currIndex].classList.add('visible');
  });
  
//------------TOP MENU----------------------
  var topMenu = document.querySelectorAll('.logo-bar > nav > ul > li');
  
  for(var i = 0; i<topMenu.length; i++){
    topMenu[i].addEventListener('mouseover', mouseOver);
    topMenu[i].addEventListener('mouseout', mouseOut);
  }

  function mouseOver() {
    this.firstElementChild.style.display = 'block';
  }
  
  function mouseOut() {
    this.firstElementChild.style.display = "none";
  }
  
  //----------------WINDOW-----------------------------
  
  var body = document.querySelector('body');
  var photos = body.querySelectorAll('.slider-image>ul li');
  
  console.log(photos);
  
  for(var i =0; i<photos.length; i++){
    photos[i].addEventListener('click', fullScreen);
  }
  
  function fullScreen(){
//    console.log(this.firstElementChild.getAttribute('src'));
    var imgUrl = this.firstElementChild.getAttribute('src');
    var newDiv = document.createElement('div');
    
    newDiv.classList.add('fullscreen');
    newDiv.innerHTML = 
      "<img src='" + imgUrl + "'><button class='close'>CLOSE</button>";
    body.appendChild(newDiv);
    var tempButt = body.querySelector('.close');
    tempButt.addEventListener('click', function(){
      this.parentNode.remove(this);
    })
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



});
