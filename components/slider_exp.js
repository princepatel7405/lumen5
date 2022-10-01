function slider(){
    return `<img src="https://www.linkpicture.com/q/breakshire.png" alt="" class="slide">
    <button id="right-btn">></button>
    <button id="left-btn"><</button>`
}


const slideActive=()=>{
    const sliderimg=["https://www.linkpicture.com/q/breakshire.png","https://www.linkpicture.com/q/cms.png","https://www.linkpicture.com/q/dnv.png","https://www.linkpicture.com/q/mitsubishi.png","https://www.linkpicture.com/q/mondadori.png","https://www.linkpicture.com/q/nc-state.png","https://www.linkpicture.com/q/siemens.png"]
    let image=document.querySelector("#slider img")
const rightBtn=document.getElementById("right-btn")
const leftBtn=document.getElementById("left-btn")
let count=0;
rightBtn.addEventListener("click",()=>{
    if(count==sliderimg.length){
        count=0
    }
    image.src=sliderimg[count]
    count++;
})
leftBtn.addEventListener("click",()=>{
    if(count==0){
        count=sliderimg.length
    }
    count--;
    image.src=sliderimg[count]
})
}
export  {slider,slideActive}