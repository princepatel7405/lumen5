const navbar = () => {
    return `     <div id="navbar_logo">
    <img src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png"/>
</div>
<div id="navbar_menu">
    <div>Pricing</div>
    <div>Enterprise</div>
    <div>Case studies</div>
    <div><ul>
        <li><a href="#">Learn <b>v</b></a>
        <ul class="dropdown">
            <li><a href="#">Resource</a></li>
            <li><a href='#'>Blog</a></li>
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