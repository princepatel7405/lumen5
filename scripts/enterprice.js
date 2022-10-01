
const video=document.querySelector("#pop-up video")
document.getElementById("media").addEventListener("click",()=>{
    document.getElementById("pop-up").style.display='block'
    
    video.play()
    
    ;
})
document.querySelector("#pop-up span").addEventListener("click",()=>{
    document.getElementById("pop-up").style.display='none';
    video.pause()
    video.load()
})
// const vide=document.querySelector("#popup2 video")
// document.querySelector("#minivideo>video").addEventListener("click",()=>{
//     document.getElementById("popup2").style.display='block'
    
//     vide.play()
    
//     ;
// })

// document.querySelector("#popup2 span").addEventListener("click",()=>{
//     document.getElementById("popup2").style.display='none';
//     video.pause()
//     video.load()
    

// })
document.querySelectorAll("#midcontainer #minivodeo video").forEach(vide=>{
    vide.onclick=()=>{
        console.log(1);
        document.querySelector("#popUp2").style.display="block";
        document.querySelector("#popUp2 video").src=vide.getAttribute("src")
        document.querySelector("#popUp2 video").play()
    }
})
document.querySelector("#popUp2 span").onclick=()=>{
    document.querySelector("#popUp2").style.display="none";
    document.querySelector("#popUp2 video").pause()
}



import { slider,slideActive } from "../components/slider_exp.js";
document.getElementById("slider").innerHTML=slider()
slideActive()