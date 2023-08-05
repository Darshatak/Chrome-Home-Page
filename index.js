const SearchBarContainer = document.querySelector(".serach-bar-container");
const Collapse = document.querySelector(".collapse");
const Magnifier = document.querySelector(".magnifier");
const inputEl = document.querySelector(".input");

const animationSearch = document.getElementById("hover");
let currentPage = 1;
let cardsPerPage = calculateCardsPerPage();
const container = document.querySelector('.website');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');



Collapse.addEventListener("click",()=>{  
    SearchBarContainer.classList.add("active");
    animationSearch.innerText="Hover to Enable Search";

})


Magnifier.addEventListener("mouseover",()=>{  
    SearchBarContainer.classList.remove("active");


})
Magnifier.addEventListener("mouseover",()=>{  
    SearchBarContainer.classList.contains("active");
    animationSearch.innerText="click Search Icon to Collapse";
    inputEl.focus();

})



function showTime(){
    var date = new Date();
    var h =date.getHours();
    var m =date.getMinutes();
    var s =date.getSeconds();

    h= h < 10 ? "0" + h : h;
    m= m < 10 ? "0" + m : m;
    s= s < 10 ? "0" + s : s;

    if (h < 12 ){
        var session="Am";
        var time= +h+ "  : "+m+ "  : "+s+ session;
    }else{
        session="Pm";
        var time= +h+ "  : "+m+ "  : "+s+ session;
        if(h>12){
            h=h-12;
            var time= +h+ "  : "+m+ "  : "+s+ session;
        }
    }

      
    //console.log(time);
    document.getElementsByTagName('h1')[0].innerText=time;
    setTimeout(showTime,1000);
}

window.addEventListener('resize', () => {
    cardsPerPage = calculateCardsPerPage();
    showCards();
  });

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card.page-2');
    const lastCard = cards[cards.length - 1];
    const lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
  
    if (pageOffset > lastCardOffset) {
      cards.forEach((card) => {
        card.style.display = 'block';
      });
    }
  });



  
nextButton.addEventListener('click', () => {
    backButton.style.display="block"
  currentPage++;
  showCards();
});
backButton.addEventListener('click', () => {
    currentPage--;
        showCards();
    if(currentPage==1){
        backButton.style.display="none"
    }else{
        showCards();
    }
});

function calculateCardsPerPage() {

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    if (viewportWidth >= 2250 && viewportHeight >= 900) {
        return 18;
      }else if (viewportWidth >= 2150 && viewportHeight >= 900) {
        return 16;
      }else if (viewportWidth >= 2050 && viewportHeight >= 900) {
        return 14;
      }else if (viewportWidth >= 1850 && viewportHeight >= 900) {
        return 12;
      }else if (viewportWidth >= 1550 && viewportHeight >= 800) {
        return 10;
      }else if (viewportWidth >= 1400 && viewportHeight >= 800) {
        return 8;
      }else if (viewportWidth >= 1350 && viewportHeight >= 600) {
        return 8;
      } else if (viewportWidth >= 1200 && viewportHeight >= 400) {
        return 8;
      } else if (viewportWidth >= 1200 && viewportHeight >= 600) {
        return 8;
      } else if (viewportWidth >= 1200 && viewportHeight >= 400) {
        return 8;
      } else if (viewportWidth >= 1200) {
        return 8;
      } else if (viewportWidth >= 992 && viewportHeight >= 800) {
        return 8;
      } else if (viewportWidth >= 992 && viewportHeight >= 600) {
        return 6;
      } else if (viewportWidth >= 992 && viewportHeight >= 400) {
        return 6;
      } else if (viewportWidth >= 992) {
        return 6;
      } else if (viewportWidth >= 768 && viewportHeight >= 800) {
        return 6;
      } else if (viewportWidth >= 768 && viewportHeight >= 600) {
        return 4;
      } else if (viewportWidth >= 768 && viewportHeight >= 400) {
        return 4;
      } else if (viewportWidth >= 768) {
        return 4;
      } else if (viewportWidth >= 576 && viewportHeight >= 800) {
        return 4;
      } else if (viewportWidth >= 576 && viewportHeight >= 600) {
        return 4;
      } else if (viewportWidth >= 576 && viewportHeight >= 400) {
        return 4;
      } else if (viewportWidth >= 576) {
        return 3;
      } else {
        return 2;
      }
       
  }

function showCards() {
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const cards = container.querySelectorAll('.card');

  cards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  if (endIndex <= cards.length) {
    nextButton.style.display = 'block';

  } else {

    nextButton.style.display = 'none';
  }

 
}
showCards();
  