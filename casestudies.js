import {signupinfo}  from "./components/signupinfo.js";

let signup_info = document.getElementById("signupinfo");

signup_info.innerHTML = signupinfo();


const intro = [
    {   
        name: "Cisco",
        img: "https://images.ctfassets.net/5ltrds677kah/7lRNiPlprFOwXrBi7CgODm/ec53a38d95e4e054c5f8cacda2885870/7E45F408-F138-4249-B4A3-9ACE2CD66EBB_1_105_c.jpeg?w=400",
        description: "How Cisco Scaled Communications With Video Content Localization Using Lumen5",
    },
    {   
        name: "Siemens",
        img: "https://images.ctfassets.net/5ltrds677kah/6bmIUsDjceTBBuLyIlQtPd/b4770d287c2a1e21de19eab7efeec52f/siemens1.png?w=400",
        description: "How Siemens Transformed Digital Communications With Lumen5",
    },
    {   
        name: "Berkshire Hathaway",
        img: "https://images.ctfassets.net/5ltrds677kah/5Yp4i7R522ebbvbJXtnwS/c35344519394d88875664257119c8880/berkshire4.png?w=400",
        description: "How Berkshire Hathaway HomeServices created 500 videos in 10 months",
    },
    {   
        name: "Mondadori",
        img: "https://images.ctfassets.net/5ltrds677kah/4CEMG9nD5szpcNtznePJWx/57c08b81180c494eed8c0021ce72924a/mondadori1.png?w=400",
        description: "Learn how Mondadori doubled social media engagement and tripled their video views with Lumen5.",
    },
    {   
        name: "CMS Law",
        img: "https://images.ctfassets.net/5ltrds677kah/6qQh4D8FV5Tldbgr1D2XOc/278756ab5351d4952fe7ce26d72a7f3c/cms1.png?w=400",
        description: "How Lumen5 is helping CMS get in front of their audience and reach their video marketing goals",
    },
    {   
        name: "NC State University",
        img: "https://images.ctfassets.net/5ltrds677kah/1PZVc3Lm5w8CdYIROtKYdQ/024aa5c270749e239a4603207f10667d/ncstate1.png?w=400",
        description: "How Lumen5 is helping NC State University boost their online presence and drive more traffic",
    },
    {   
        name: "Taxevity",
        img: "https://images.ctfassets.net/5ltrds677kah/sHpNEfrQNeXZZPBN9SqAY/8a7485933bddc3ab99d832342f9b794f/taxevity1.png?w=400",
        description: "How Lumen5 is helping Taxevity with brand consistency",
    },
    {   
        name: "Mitsubishi",
        img: "https://images.ctfassets.net/5ltrds677kah/1vY85VxpSTeHf5v8JHpGTj/9324f772f8a894e54243862414863c7f/mitsubishi1.png?w=400",
        description: "How Lumen5 is helping MHI expand their content strategy and speed up their workflow",
    },
    {   
        name: "DNV",
        img: "https://images.ctfassets.net/5ltrds677kah/7IVEpPjwhpbvaW9GLk9okQ/457f4058deb29b711941ef66dfcff7e6/dnv1.png?w=400",
        description: "How Lumen5 helped DNV GL level up their social media game",
    },
];

localStorage.setItem("intro", JSON.stringify(intro));

let data = JSON.parse(localStorage.getItem("intro"));

//console.log(data)


const append = (data) => {
    let data_div = document.getElementById("container");
    
   //data_div.innerHTML = null;

    data.forEach((el) => {
        //console.log(el)
        let div = document.createElement("div");

        let name = document.createElement("h3");
        name.innerHTML = el.name;

        let description = document.createElement("p");
        description.innerHTML = el.description;

        let img = document.createElement("img");
        img.id = "img";
        img.src = el.img;

        img.addEventListener('mouseover', (event) => {
            img.style.width = "105%";
            img.style.position = "relative";
        });

        img.addEventListener('mouseout', (event) => {
            img.style.width = "100%";
        });

        div.append(img, name, description);

        data_div.append(div);

    });
};


append (data);
