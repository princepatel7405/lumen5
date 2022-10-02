const navbar = () => {
    return `     <div id="navbar_logo">
    <img src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png"/>
</div>
<div id="navbar_menu">
    <div><p>Pricing</p></div>
    <div><p>Enterprise</p></div>
    <div><a href="casestudies.html"><p>Case studies</p></a></div>
    <div><ul>
        <li><a href="#"><p>Learn <b>v</b></p></a>
        <ul class="dropdown">
            <li><a href="#"><p>Resource</p></a></li>
            <li><a href='#'><p>Blog</p></a></li>
        </ul>
        </li>
    </ul></div>
<!-- </div> -->
    <!-- <div id="navbar_login_buttons"> -->
        <button id="navbar_login_button"><a href="./Login&Signup/login.html">Login</a></button>
        <button id="navbar_signup_button"><a href="./Login&Signup/Signup.html">Signup</a></button>
    </div>
    
`
};

export default navbar;