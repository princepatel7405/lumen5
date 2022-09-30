import {navbar}  from "../components/navbar_imp.js";
import{footer} from "../components/footer_imp.js";


let navbar1 =document.getElementById("navbar");
navbar1.innerHTML=navbar();

let footer1=document.getElementById("footer");
footer1.innerHTML=footer();