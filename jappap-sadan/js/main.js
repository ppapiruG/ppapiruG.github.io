$(document).ready(function(){
    $('#header .bottom_nav').on({
        mouseenter: function(){
            $(this).addClass('on');
        },
        mouseleave: function(){
            $(this).removeClass('on');
        }
    
    });
});

function openBtn(){
    $('#header .left_nav .menu_nav').animate({height:'show'},350);
}

function closeBtn(){
    $('#header .left_nav .menu_nav').animate({height:'hide'},350);
}

const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

window.onload = () => {
    let images = document.querySelectorAll(".image");
    let imgStack = [0, 0];
    let colWidth = 250;
    for(let i = 0; i < images.length; i++) {
      let minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
      let x = colWidth * minIndex;
      let y = imgStack[minIndex];
      imgStack[minIndex] += (images[i].children[0].height + 20);
      images[i].style.transform = `translateX(${x}px) translateY(${y}px)`;
      if(i === images.length - 1) {
        document.querySelector(".images").style.height = `${Math.max.apply(0, imgStack)}px`;
      }
    }
  }