let list = document.querySelectorAll(".skills li")
let pages=[".page-one",".page-two",".page-three"]

for(let i = 0; i< list.length; i++){
    list[i].addEventListener('click', event => {
        removeClass()
        list[i].classList.add("active")
        
        let page =document.querySelector(pages[i])
        removepage()
        page.style.position= "relative";
        page.style.bottom= "0"
    })
  }



  function removeClass(){
    for(let i = 0; i< list.length; i++){
        list[i].classList.remove('active');
    }
  }
  function removepage(){
    for(let i = 0; i< pages.length; i++){
        document.querySelector(pages[i]).style.position = "absolute";
        document.querySelector(pages[i]).style.bottom = "-200%"
    }
  }