let backg = document.querySelector(".landing")

let image =["url('first.jfif')","url('second.jpg')","url('third.jpg')"]
let right= document.querySelector(".right")
let left= document.querySelector(".left")
let i=0
backg.style.backgroundImage=image[i];
right.addEventListener("click",function(){
    i++
    if (i >image.length ){
        i=0
    }
    
    backg.style.backgroundImage=image[i];
})
left.addEventListener("click",function(){
    i=i-1
    if (i < 0 ){
        i=image.length-1
    }
    backg.style.backgroundImage=image[i];
})




