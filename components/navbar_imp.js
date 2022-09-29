const navbar = () => {
    return `     <div id="navbar_logo">
    <img src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png"/>
</div>
<div id="navbar_menu">
    <div><p>Pricing</p></div>
    <div><p>Enterprise</p></div>
    <div><p>Case studies</p></div>
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
        <button id="navbar_login_button">Login</button>
        <button id="navbar_signup_button">Sign up</button>
    </div>
    
`
};

export default navbar;