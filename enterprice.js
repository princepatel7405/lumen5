
const video=document.querySelector("video")
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