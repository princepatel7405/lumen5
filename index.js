import {signupinfo}  from "./components/signupinfo.js";

let signup_info = document.getElementById("signupinfo");

signup_info.innerHTML = signupinfo();

//Learning resourse div

import {resourse}  from "./components/signupinfo.js";

let resourse_div = document.getElementById("resourse");

resourse_div.innerHTML = resourse();

const btn_name = [
    { name : "Content Market",},
    { name : "Communication",},
    { name : "Promotional",},
    { name : "People and Culture",},
    { name : "Localization",},
]

const videos_contentMarket = [
    {video : "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience.mp4",},
];

const videos_communications = [
    {video : "https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4",},

    {video : "https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4",},
    {video : "https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4",},
];


localStorage.setItem("btn_name", JSON.stringify(btn_name));

let btn_data = JSON.parse(localStorage.getItem("btn_name"));


const append = (btn_data) => {

    btn_data.forEach((el) => {

    let data_div = document.getElementById("btn_ex");

    let btn = document.createElement("button");
        btn.innerHTML = el.name;
        // btn.addEventListener("mouseover", (event) =>{
        //     btn.style.background = "#2E86C1";
        //     btn.style.padding = "20px"
        //     btn.style.color = "white";
        // });

        // btn.addEventListener("mouseout", (event) =>{
        //     btn.style.background = "white";
        //     btn.style.border = "1px solid #2E86C1";
        //     btn.style.padding = "10px"
        //     btn.style.color = "#2E86C1";
        // });

        data_div.append(btn);
    });
}

append(btn_data);


const append_video = (data) => {
    let data_div = document.getElementById("explore");
    
   //data_div.innerHTML = null;

   data.forEach((el) => {
        
        let div = document.createElement("div");

        let iframe = document.createElement('iframe');
        iframe.src = el.video;

        // iframe.setAttribute("autoplay=1");
        // iframe.setAttribute("mute", true);
        // iframe.muted;

        
        // img.addEventListener('mouseover', (event) => {
        //     img.style.width = "105%";
        //     img.style.position = "relative";
        // });

        // img.addEventListener('mouseout', (event) => {
        //     img.style.width = "100%";
        // });

        div.append(iframe);

        data_div.append(div);

    });
};

append_video(videos_contentMarket);

const append_videos = (data) => {
    let data_divv = document.getElementById("video_template");
    
   //data_div.innerHTML = null;

   data.forEach((el) => {
        
        let div = document.createElement("div");

        let iframe = document.createElement('iframe');
        iframe.src = el.video;


        div.append(iframe);

        data_divv.append(div);

    });
};

append_videos(videos_communications);